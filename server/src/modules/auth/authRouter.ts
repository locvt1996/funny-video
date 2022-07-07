import express from "express";
import { authentication } from "./authController";

const authRouter = express.Router();

authRouter.post("/authentication", authentication);

export default authRouter;
