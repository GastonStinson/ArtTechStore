import { Router } from 'express';
const router = Router();

import { getUsers } from '../controllers/index.controller';

router.get('/users', getUsers);

export default router;