import { Request, Response } from 'express';

const User = require('../models/user')


export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email,password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      await user.update({ name, email });
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      await user.destroy();
      res.json({ message: 'Usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};


