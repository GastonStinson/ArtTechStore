const Puntajes = require("../models/Puntajes.js");



function obtenerFechaHoy() {
  const fechaHoy = new Date();
  const mes = `${fechaHoy.getMonth() + 1}`.padStart(2, "0");
  const dia = `${fechaHoy.getDate()}`.padStart(2, "0");
  return `${fechaHoy.getFullYear()}-${mes}-${dia}`;
}

exports.obtenerPuntajeActual = async (req, res) => {
  const fechaHoy = obtenerFechaHoy();
  try {
    const { id } = req.params;
    const puntaje = await Puntajes.findOne({
      where: {
        userId: id,
        fecha : fechaHoy
      },
    });
    res.json(puntaje);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerPuntajes = async (req, res) => {
  try {
    const { id } = req.params;
    const puntajesArray = await Puntajes.findAll({
      where: {
        userId: id,
      },
      attributes: ["dailyPoint", "fecha"],
    });
    res.json(puntajesArray);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
