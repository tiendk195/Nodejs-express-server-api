import express from "express";
import AuthController from "../controllers/authController";

const authRoutes = express.Router();
const authController = new AuthController();

authRoutes.post("/login", authController.login);
authRoutes.post("/register", authController.register);

export default authRoutes;
