import mongoose from "mongoose";

import { VideoDoc } from "./type";

const videoSchema = new mongoose.Schema<VideoDoc>({
  videoId: {
    type: String,
    required: [true, "Please tell me your video id"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Please provide a password"],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  uploadBy: {
    type: String,
    required: [true, "Video must belong a user"],
  },
});

const User = mongoose.model<VideoDoc>("Video", videoSchema);

export default User;
