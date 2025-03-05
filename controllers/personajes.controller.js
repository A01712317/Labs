const express = require('express');
const path = require('path');
const fs = require('fs');
const controller =express.Router();
controller.use(express.static(path.join(__dirname,'../public')));

const Personaje = require('../models/personaje.model');

controller._get_contenido=(request, response, next) => {
    response.render('agregar_personaje')
}
controller._post_peronajes=(request, response, next) => {
    console.log(request.body);
    const mi_personaje= new Personaje(request.body.nombre);
    mi_personaje.save();
    response.redirect('/personajes/');



}

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