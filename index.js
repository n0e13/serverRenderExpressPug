const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT;

require('dotenv').config();

// Permite recibir parámetros en formato JSON.
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');





app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});