const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
const personajesRouts = require('./routs/personajes.routs');

app.use(bodyParser.urlencoded({extended: false}));
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});
app.use('/personajes', personajesRouts);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    
    //Manda la respuesta
    response.statusCode = 404;
    response.send('No se encuentra el recurso que estás buscando'); 
});

app.listen(3000);