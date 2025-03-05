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
    response.redirect('/peronaje/agregar');
};

controller.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/usuarios/login'); 
    });
};
module.exports = controller