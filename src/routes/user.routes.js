import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

// Create a new router instance
const router = Router();

// Register user route
router.route("/register").post(registerUser);

export default router; // Fixed export and variable name