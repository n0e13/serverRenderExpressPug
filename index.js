require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT;

// Permite recibir parámetros en formato JSON.
app.use(express.json());
// Para poder leer los datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home');
})

// con esto hago el fetch pasándole todo
app.get('/film/:title', async function (req, res) {

    let defaulfilm = req.params.title || "Beetlejuice";
    console.log(defaulfilm);

    try {
        let response = await fetch(`http://www.omdbapi.com/?t=${defaulfilm}&apikey=${process.env.API_KEY}`); //{}
        let film = await response.json(); //{}
        res.render('film', { film }); // Pinta datos en el pug
    } catch (error) {
        console.log(`EROR : ${error.stack}`);
    }
})


// post es recibir datos y hacer algo en el servidor
app.post('/film', function (req, res) {
    // Nombre del objeto al que hace referencia en el PUG
    let peli = req.body.movie;
    console.log(peli);
    res.redirect(`/film/${peli}`);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});