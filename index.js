const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT;

require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');


app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});