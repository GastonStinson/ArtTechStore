import { Router } from "express";
const router = Router();

import userRoutes from "./userRoutes";
import productsRoutes from "./productsRoutes";
import rolRoutes from './rolRoutes'

router.use("/users", userRoutes);
router.use("/products", productsRoutes);
router.use("/roles", rolRoutes);

export default router;
