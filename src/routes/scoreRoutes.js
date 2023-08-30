const express = require("express");
const scoreController = require("../controllers/scoreController");

const router = express.Router();

router.get('/puntajeActual/:id',scoreController.obtenerPuntajeActual)

router.get('/puntajesArray/:id',scoreController.obtenerPuntajes)
module.exports = router