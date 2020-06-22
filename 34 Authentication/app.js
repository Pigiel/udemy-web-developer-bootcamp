const   express                 = require('express'),
        app                     = express(),
        mongoose                = require('mongoose'),
        passport                = require('passport'),
        bodyParser              = require('body-parser'),
        User                    = require('./models/user'),
        LocalStrategy           = require('passport-local'),
        passportLocalMongoose   = require('passport-local-mongoose');

const PORT = 80;
const IP = '0.0.0.0';

mongoose.connect('mongodb://mongo:27017/secret', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: 'Secret used to encode and decode sessions which should be encoded',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
});

// Auth routes

// Show sign up form
app.get('/register', (req, res) => {
    res.render('register');
});
// Handling user sign up
app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/secret');
        });
    });
});

// Login routes

// Render login page
app.get('/login', (req, res) => {
    res.render('login');
});
// Login logic
// Middleware
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), (req, res) => {
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

app.listen(PORT, IP, () => {
    console.log(`Server started on http://${IP}:${PORT}`);
});