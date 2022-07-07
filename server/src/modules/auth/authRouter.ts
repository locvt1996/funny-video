import express from "express";

// controllers
import { authentication, tryLogin } from "./authController";

// middlewares
import { getUserFromToken } from "../../middlewares/authMiddleware";

const authRouter = express.Router();

authRouter.post("/authentication", authentication);
authRouter.post("/try-login", getUserFromToken, tryLogin);

export default authRouter;
