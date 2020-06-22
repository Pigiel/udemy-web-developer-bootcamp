const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      passport    = require('passport'),
      LocalStrategy = require('passport-local'),
      Campground  = require('./models/campground'),
      Comment     = require('./models/comment'),
      User        = require('./models/user'),
      seedDB      = require('./seeds');

const port = 80;

mongoose.connect('mongodb://yelp-camp-db:27017/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
seedDB();

// Passport configuration
app.use(require('express-session')({
    secret: 'Secret required to authenticate the session which can be anything',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.get('/', (req, res) => {
    res.render('landing');
});
// INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allcampground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds/index', {campgrounds: allcampground});
        }
    });
});
// CREATE - add new campground to the DB
app.post('/campgrounds', (req, res) => {
    // Get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = {name: name, image, image, description: description};
    // Create a new campground and seve to DB
    Campground.create(newCampground, (err, newCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });
});
// NEW - show form to create new campground
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});
// SHOW - show more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            // Render show template with that campground
            res.render('campgrounds/show', {campground: foundCampground, currentUser: req.user});
        }
    });
});
// Comments routes
app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
    // Find the campground by ID
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new', {campground: campground});
        }
    });
});

app.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
    // Find the campground by ID
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            // Create new comment
            // console.log(req.body.comment);
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    // Connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // Redirect to campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
});
// Auth routes
// Show register form
app.get('/register', (req, res) => {
    res.render('register');
});
// Handle sign up logic
app.post('/register', (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/campgrounds');
        });
    });
});
// Show login form
app.get('/login', (req, res) => {
    res.render('login');
});
// Handle login logic
app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => {
});
// Logout route
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/campgrounds');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(port, () => {
    console.log(`YelpCamp server started at http://localhost:${port}`);
});