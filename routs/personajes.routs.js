const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const controller =require('../controllers/personajes.controller')

router.get('/agregar',isAuth, controller._get_contenido);

router.post('/agregar',isAuth, controller._post_peronajes );

router.get('/body',isAuth, controller.get_body);

router.get('/styles.css',isAuth,  controller._get_styles);

router.get('/funciones.js',isAuth, controller._get_funciones);

router.get('/navegacion.js',isAuth, controller._get_navecacion);

router.get('/:id',isAuth, controller.get_root); // Los 2 puntos especifican que la ruta es una variable

router.get('/',isAuth, controller.get_root);

module.exports = router;