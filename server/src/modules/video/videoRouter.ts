import express from "express";

// controllers
import { uploadVideo, getListVideo } from "./videoController";

// middlewares
import { getUserFromToken } from "../../middlewares/authMiddleware";

const videoRouter = express.Router();

videoRouter.route("/").post(getUserFromToken, uploadVideo).get(getListVideo);

export default videoRouter;
