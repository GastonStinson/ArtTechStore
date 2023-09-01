const { Router } = require("express");

import {
  createRol,
  deleteRol,
  getRolById,
  getRoles,
  updateRol,
} from "../controllers/rolController";

const router = Router();

router.get("/", getRolById);

export default router;
