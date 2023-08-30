import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../routes/dbConnect';

export const getUsers = async(req: Request, res: Response) => {
    const response: QueryResult = await pool.query('SELECT * FROM users');        
    res.status(200).json(response.rows);
};