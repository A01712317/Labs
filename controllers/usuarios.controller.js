const path = require('path');
const fs = require('fs');
const Usuario = require('../models/usuarios.model');

exports.get_signup=(request, response, next) => {
    response.render('login.ejs',{
        isNew: true,
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.post_signup=(request, response, next) => {
    const usuario= new
        Usuario(request.body.username,request.body.password)
    usuario.save().then(() => {
        response.redirect('/usuarios/login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login=(request, response, next) => {
    response.render('login.ejs',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
    });
};

exports.post_login=(request, response, next) => {
    request.session.isLoggedIn =true;
    request.session.username = request.body.username;
    response.redirect('/personajes/agregar');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/usuarios/login'); 
    });
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