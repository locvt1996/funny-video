import { ObjectId } from "mongoose";

export interface VideoDoc extends Document {
  _id: ObjectId;
  videoId: string;
  title: string;
  description: string;
  createdAt: Date;
  uploadBy: string;
}
