import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../Controllers/userController.js";

import { verifyUser,verifyAdmin,verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", createUser);
router.put("/:id",verifyUser, updateUser);
router.delete("/:id", verifyUser,deleteUser);
// router.get("/search", getUserBysearch);

router.get("/:id",verifyUser, getUser);
router.get("/", verifyAdmin,getAllUser);

export default router;
