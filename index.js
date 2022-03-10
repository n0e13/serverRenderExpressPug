require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT;

// Permite recibir parámetros en formato JSON.
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function (req, res) {
    res.render('home');
})

app.get('/film/:title', function (req, res) {
    res.render('film');
})

app.post('/film', function (req, res) {
   // res.redirect();
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});