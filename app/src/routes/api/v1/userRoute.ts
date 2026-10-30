import express from "express";
import { createUser } from "../../../controllers/userController.js";
const router = express.Router();
router.post("/create", createUser);
export default router;

//api/v2/users/create