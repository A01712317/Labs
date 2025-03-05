const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usuarios.controller');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/logout', usersController.get_logout);
router.get('/styles.css',  usersController._get_styles);

router.get('/funciones.js', usersController._get_funciones);

router.get('/navegacion.js', usersController._get_navecacion);

module.exports = router;