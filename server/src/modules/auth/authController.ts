import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongoose";
import jwt from "jsonwebtoken";
import { UserDoc } from "../user/type";
import User from "../user/userModel";

import { catchAsync, TimeOneDate } from "../../helpers/utils";
import AppError from "../../helpers/appError";

const { promisify } = require("util");

const signJwt = (id: ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const setCookieToClient = (res: Response, token: string) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 90 * TimeOneDate),
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("jwt", token, cookieOptions);
};

const sendTokenToCliend = (res: Response, user: UserDoc) => {
  const token = signJwt(user._id);
  setCookieToClient(res, token);

  res.status(200).json({
    status: "success",
    token,
    userInfo: {
      email: user.email,
      id: user._id,
    },
  });
};

export const authentication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    let user;

    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    user = await User.findOne({ email }).select("+password");

    if (user && !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password!", 401));
    }

    user = await User.create({
      email,
      password,
    });

    sendTokenToCliend(res, user);
  }
);

export const tryLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = (await User.findById(decoded.id)) as UserDoc;

    if (!user) {
      next(new AppError(`The user belonging this token no exits`, 401));
    }

    res.status(200).json({
      status: "success",
      token,
      userInfo: {
        email: user.email,
        id: user._id,
      },
    });
  }
);
