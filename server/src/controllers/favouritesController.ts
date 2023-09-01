import { Request, Response } from "express";
const Favorito = require("../models/favorito");
const Usuario = require("../models/usuario");
const Producto = require("../models/producto");

export const createFavorito = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  try {
    const favorito = await Favorito.create({ userId, productId });

    res.status(201).json(favorito);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el favorito" });
  }
};

export const getFavoritos = async (req: Request, res: Response) => {
  try {
    const favoritos = await Favorito.findAll({
      include: [{ model: Usuario }, { model: Producto }],
    });

    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los favoritos" });
  }
};

export const getFavoritosByUserId = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const favoritos = await Favorito.findAll({
      where: { userId },
      include: [{ model: Producto }],
    });

    res.json(favoritos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los favoritos del usuario" });
  }
};

export const deleteFavorito = async (req: Request, res: Response) => {
  const favoritoId = req.params.id;

  try {
    const favorito = await Favorito.findByPk(favoritoId);

    if (favorito) {
      await favorito.destroy();
      res.json({ message: "Favorito eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Favorito no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el favorito" });
  }
};
