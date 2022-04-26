const express = require ('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Handlebars
app.set('view engine' , 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware, servir contenido estático
app.use( express.static('public'));



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Luis',
        titulo: 'Curso node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Luis',
        titulo: 'Curso node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Luis',
        titulo: 'Curso node'
    });
});

/*
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});


app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});
*/


app.get('/holas', (req, res) => {
    res.send('HoHolas');
});





// Redireccionamiento a página 404
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
    console.log("Excuchando " + PORT);
});

