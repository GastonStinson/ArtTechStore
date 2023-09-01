const { Router } = require("express");

import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getUserById);
router.get("/create", createUser);
router.get("/delete", deleteUser);
router.get("/update", updateUser);

export default router;
