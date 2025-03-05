const express = require('express');
const path = require('path');
const fs = require('fs');
const controller =express.Router();

controller.get_login=(request, response, next) => {
    response.render('login.ejs',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

controller.post_login=(request, response, next) => {
    request.session.isLoggedIn =true;
    request.session.username = request.body.username;
    response.redirect('/personajes/agregar');
};

controller.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/usuarios/login'); 
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