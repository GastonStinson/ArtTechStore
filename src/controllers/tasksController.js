const Taks = require("../models/Tasks.js");
const Usuario = require("../models/Usuario.js");
const Puntajes = require("../models/Puntajes.js");

function obtenerFechaHoy() {
  const fechaHoy = new Date();
  const mes = `${fechaHoy.getMonth() + 1}`.padStart(2, "0");
  const dia = `${fechaHoy.getDate()}`.padStart(2, "0");
  return `${fechaHoy.getFullYear()}-${mes}-${dia}`;
}
let fecha = obtenerFechaHoy();
exports.obtenerTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Taks.findAll({
      where: {
        userId: id,
      },
    });
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error el obtener taks" });
  }
};
exports.obtenerTaskId = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Taks.findByPk(id);
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error el obtener taks" });
  }
};
exports.crearTask = async (req, res) => {
  try {
    const { nombre, descripcion, completed, dueDate, prioridad, userId } =
      req.body;
    const newTask = await Taks.create({
      nombre,
      descripcion,
      completed,
      fecha,
      dueDate,
      prioridad,
      userId,
    });
    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error el obtener taks" });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToDestroy = await Taks.findByPk(id);
    if (!taskToDestroy) {
      throw new Error("Tarea no encontrada");
    }
    await taskToDestroy.destroy();
    console.log("Tarea eliminada correctamente");
    res.status(200).json(taskToDestroy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Taks.findByPk(id);

    const usuario = await Usuario.findByPk(task.userId);

    const fechaHoy = obtenerFechaHoy();

    let puntajes = await Puntajes.findOne({
      where: {
        fecha: fechaHoy,
        userId: task.userId,
      },
    });

    if (!task) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    if (!puntajes) {
      puntajes = await Puntajes.create({
        userId: task.userId,
        fecha: fechaHoy,
        dailyPoint: 0,
      });
    }

    if (task.completed == false) {
      usuario.puntaje += 100;
      task.completed = true;
      puntajes.dailyPoint += 100;
    }
    await usuario.save();
    await puntajes.save();
    await task.save();
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: error.message });
  }
};
