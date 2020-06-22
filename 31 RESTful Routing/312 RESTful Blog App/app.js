const   express     = require('express'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        methodOverride = require('method-override'),
        app         = express();
// App configs
mongoose.connect('mongodb://blog-app-db:27017/restful_blog_app', {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
// Mongoose model config
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

const Blog = mongoose.model('Blog', blogSchema);
// Insert test data
Blog.create({
    title: 'Girl Posing in Hotel Room',
    image: 'https://images.unsplash.com/photo-1564223288351-a96bea22b5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
    body: 'Photo from unsplash available at https://unsplash.com/photos/utr45-F_apw'
});
Blog.create({
    title: 'Don\'t be afraid to make another step',
    image: 'https://images.unsplash.com/photo-1564839056816-1166a56891a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    body: 'Photo from unsplash available at https://unsplash.com/photos/SOOpB2nwv-k'
});
Blog.create({
    title: 'Love Red',
    image: 'https://images.unsplash.com/photo-1582945558390-ed8805f295a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=691&q=80',
    body: 'Like fruits? Photo from unsplash available at https://unsplash.com/photos/8U30jWIv9Bs'
});
Blog.create({
    title: 'Tech Girl',
    image: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    body: 'Creative focus iPad graphical user interface marketing mass market freemium non-disclosure agreement bootstrapping accelerator customer partner network. User experience analytics iPhone stealth hackathon facebook technology low hanging fruit venture market crowdsource leverage alpha. Product management stealth influencer iteration branding venture niche market business plan funding hackathon. Alpha long tail holy grail ecosystem product management marketing interaction design. Learning curve business-to-business seed round low hanging fruit client holy grail ramen technology rockstar. Series A financing alpha mass market. Startup partnership growth hacking ramen. Hypotheses non-disclosure agreement facebook startup iPad vesting period learning curve supply chain scrum project value proposition incubator seed round agile development. Ramen branding seed round iPad incubator direct mailing focus startup. Business plan growth hacking gen-z social proof startup network effects return on investment agile development marketing A/B testing virality. Seed round holy grail sales social media mass market assets android niche market alpha lean startup traction non-disclosure agreement bandwidth. Direct mailing creative research & development prototype seed money early adopters. Business-to-business social proof creative startup ramen pivot non-disclosure agreement monetization equity. Seed round incubator creative termsheet beta ramen paradigm shift deployment market. First mover advantage advisor iteration niche market backing value proposition seed round direct mailing startup. Interaction design founders funding crowdfunding twitter business-to-consumer agile development validation ramen rockstar traction monetization non-disclosure agreement. Twitter client monetization venture lean startup. Stock assets holy grail pitch network effects direct mailing infrastructure agile development. Agile development facebook venture termsheet. Research & development leverage handshake focus.'
});
Blog.create({
    title: 'Startup HTML Girl',
    image: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    body: '<strong>Responsive web design venture agile development</strong> launch party MVP low hanging fruit metrics customer marketing early adopters long tail. Customer mass market technology growth hacking sales direct mailing buzz branding return on investment infrastructure focus network effects buyer marketing. Low hanging fruit strategy branding marketing partner network infographic leverage equity bandwidth alpha pitch twitter. Equity crowdfunding innovator monetization ecosystem branding sales market leverage. Incubator seed money partnership gamification channels network effects android startup vesting period MVP. Stock influencer termsheet growth hacking analytics. Social proof launch party infrastructure burn rate pivot iteration gen-z responsive web design ownership assets startup. Early adopters interaction design network effects validation long tail gamification agile development product management hackathon equity business plan. Interaction design gen-z virality technology holy grail. Product management social media growth hacking channels startup business plan prototype. Bandwidth agile development stock innovator equity angel investor low hanging fruit release. Social proof entrepreneur validation.'
});
// RESTful routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});
// INDEX
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});
// NEW
app.get('/blogs/new', (req, res) => {
    res.render('new');
});
// CREATE
app.post('/blogs', (req, res) => {
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            console.log(err);
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});
// SHOW
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.render('show', {blog: foundBlog});
        }
    });
});
// EDIT
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});
// UPDATE
app.put('/blogs/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});
// DELETE
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
});
// Server setup
app.listen(80, '0.0.0.0', () => {
    console.log('Server started on localhost:80') 
});