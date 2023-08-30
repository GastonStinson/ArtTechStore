import { Request, Response } from 'express';
const Status = require('../models/status.js')

export const getStatuses = async (req: Request, res: Response) => {
  try {
    const statuses = await Status.findAll();

    res.json(statuses);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estados' });
  }
};
