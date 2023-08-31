const { Router } = require("express");

import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getUserById);

export default router;
