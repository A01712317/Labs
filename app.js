const express = require('express');
const app = express();
const personajesRoutes = require('./routs/personajes.routs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});
app.use('/personajes', personajesRoutes);


app.listen(3000);