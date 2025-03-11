const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const csrf = require('csurf');
const csrfProtection = csrf(); 
app.use(csrfProtection); 

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});


const personajesRouts = require('./routs/personajes.routs');

app.use('/personajes', personajesRouts);

const usuariosRouts = require('./routs/usuarios.routs');
app.use('/usuarios', usuariosRouts);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.statusCode = 404;
    response.send('No se encuentra el recurso que estás buscando'); 
});

app.listen(3001);