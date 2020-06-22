const express = require('express');
const app = express();
const port = 80
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    const query = req.query.search;
    const url = `http://omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});