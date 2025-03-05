const express = require('express');
const path = require('path');
const fs = require('fs');
const controller =express.Router();
controller.use(express.static(path.join(__dirname,'../public')));

const Personaje = require('../models/personaje.model');

controller._get_contenido=(request, response, next) => {
    console.log(request.session.username);
    response.render('agregar_personaje', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};
controller._post_peronajes=(request, response, next) => {
    console.log(request.body);
    const mi_personaje= new Personaje(request.body.nombre);
    mi_personaje.save();
    response.setHeader('Set-Cookie', `ultima_planta=${mi_personaje.nombre}`);
    response.redirect('/personajes/agregar');
}

controller.get_root = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('lista_personajes', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        personajes: Personaje.fetchAll(),
    });
};

controller._get_styles=(request, response, next) => {
    response.sendFile(path.join(__dirname,'../public/css/styles.css'));
}

controller._get_funciones=(request,response,next) => {
    response.sendFile(path.join(__dirname, '../public/funciones.js'));
}

controller._get_navecacion=(request,response,next) => {
    response.sendFile(path.join(__dirname, '../public/navegacion.js'));
}



module.exports = controller