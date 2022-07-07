import express from "express";
import { authentication, tryLogin } from "./authController";

const authRouter = express.Router();

authRouter.post("/authentication", authentication);
authRouter.post("/try-login", tryLogin);

export default authRouter;
