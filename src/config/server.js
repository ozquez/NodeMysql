// Aca esta la configuracion del servidor de express

const express = require('express');
const path = require('path');
const bodeyParser = require('body-parser');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'))

// MIDIDDLEWARE
app.use(bodeyParser.urlencoded({extended: false}));

module.exports = app;