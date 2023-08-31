const { Router } = require("express");

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController";

const router = Router();

router.get("/", getProductById);

export default router;
