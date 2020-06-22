const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 80;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
];

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    // Get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name: name, image, image};
    campgrounds.push(newCampground);
    // Redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => {
    console.log(`YelpCamp server started at http://localhost:${port}`);
});