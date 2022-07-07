import { Request, Response, NextFunction } from "express";
import { VideoDoc } from "./type";
import Video from "./videoModel";

import { catchAsync } from "../../helpers/utils";

export const uploadVideo = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user, videoId, description, title } = req.body;

    const video = (await Video.create({
      videoId,
      description,
      title,
      uploadBy: user.email,
    })) as VideoDoc;

    res.status(200).json({
      status: "success",
      video,
    });
  }
);

export const getListVideo = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const videos = await Video.find({});

    res.status(200).json({
      status: "success",
      videos,
    });
  }
);
