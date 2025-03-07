const express = require('express');
const router = express.Router();
const controller =require('../controllers/personajes.controller')

router.get('/agregar', controller._get_contenido);

router.post('/agregar', controller._post_peronajes );

router.get('/body', controller.get_body);

router.get('/styles.css',  controller._get_styles);

router.get('/funciones.js', controller._get_funciones);

router.get('/navegacion.js', controller._get_navecacion);

router.get('/:id', controller.get_root); // Los 2 puntos especifican que la ruta es una variable

router.get('/', controller.get_root);

module.exports = router;