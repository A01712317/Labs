const express = require('express');
const path = require('path');
const fs = require('fs');
const controller =express.Router();
controller.use(express.static(path.join(__dirname,'../public')));
const personajes= [];

controller._get_contenido=(request, response, next) => {
    let html= '';
    html += fs.readFileSync(path.join(__dirname,'../public/head.html')).toString();
    html += fs.readFileSync(path.join(__dirname,'../public/form.html')).toString();
    response.send(html);
}
controller._post_peronajes=(request, response, next) => {
    console.log(request.body);
    personajes.push(request.body.nombre);
    let html= '';
    html += fs.readFileSync(path.join(__dirname,'../public/head.html')).toString();
    html += `<div class="columns">`;
    for(let personaje of personajes) {
    html += `<div class="column">`;
    html += `<div class="card">
    <div class="card-content">
        <div class="content">`;
    html += personaje;
    html += `</div>
            </div>
            </div>
        </div>`;}
    html += `</div>`;
    html += fs.readFileSync(path.join(__dirname,'../public/form.html')).toString();
    response.send(html);
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