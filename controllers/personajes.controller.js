const path = require('path');
const fs = require('fs');


const Personaje = require('../models/personaje.model');

exports._get_contenido=(request, response, next) => {
    console.log(request.session.username);
    response.render('agregar_personaje', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports._post_peronajes = (request, response, next) => {
    console.log(request.body);
    const nombre = request.body.nombre;

    const mi_personaje = new Personaje(nombre);
    mi_personaje.save()
        .then(() => {
            request.session.info = `El personaje "${mi_personaje.nombre}" se ha creado`;
            console.log('Personaje guardado correctamente');
            response.redirect('/personajes/');
        })
        .catch((error) => {
            console.log('Error al guardar el personaje:', error);
            request.session.info = 'Error al guardar el personaje';
            response.redirect('/personajes/agregar');
        });
};

exports.get_root = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info){
        request.session.info='';
    }
    Personaje.fetch(request.params.id)
        .then(([rows,fieldData])=>{
            console.log(fieldData);
            console.log(rows);
            response.render('_lista_personajes', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                personajes: rows,
                mensaje: mensaje,
            });
        }).catch(()=>{
            console.log('error jaja');
        }); 
};

exports.get_body = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports._get_styles=(request, response, next) => {
    response.sendFile(path.join(__dirname,'../public/css/styles.css'));
}

exports._get_funciones=(request,response,next) => {
    response.sendFile(path.join(__dirname, '../public/funciones.js'));
}

exports._get_navecacion=(request,response,next) => {
    response.sendFile(path.join(__dirname, '../public/navegacion.js'));
}

