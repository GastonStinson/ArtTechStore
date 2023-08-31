import { Router } from "express";
const router = Router();

import userRoutes from "./userRoutes";
import productsRoutes from "./productsRoutes";

router.use("/users", userRoutes);
router.use("/products", productsRoutes);

export default router;
