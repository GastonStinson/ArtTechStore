// src/routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas de usuarios
router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.post('/login', usuarioController.loginUsuario)
router.post('/', usuarioController.crearUsuario);

module.exports = router;
