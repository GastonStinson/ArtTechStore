const { Router } = require("express");

import {
  createOrder,
  deleteOrder,
  getOrders,
  getOrdersByUser,
} from "../controllers/orderController";

const router = Router();

router.get("/", getOrdersByUser);

export default router;
