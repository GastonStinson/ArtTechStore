import { Request, Response } from 'express';
const Rol = require('../models/rol'); 

export const createRol = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newRol = await Rol.create({ name });

    res.status(201).json(newRol);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el rol' });
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Rol.findAll();

    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles' });
  }
};

export const getRolById = async (req: Request, res: Response) => {
  const roleId = req.params.id;

  try {
    const rol = await Rol.findByPk(roleId);

    if (rol) {
      res.json(rol);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el rol' });
  }
};

export const updateRol = async (req: Request, res: Response) => {
  const roleId = req.params.id;
  const { name } = req.body;

  try {
    const rol = await Rol.findByPk(roleId);

    if (rol) {
      await rol.update({ name });
      res.json(rol);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol' });
  }
};

export const deleteRol = async (req: Request, res: Response) => {
  const roleId = req.params.id;

  try {
    const rol = await Rol.findByPk(roleId);

    if (rol) {
      await rol.destroy();
      res.json({ message: 'Rol eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el rol' });
  }
};
