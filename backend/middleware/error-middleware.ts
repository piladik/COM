import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if ((err.code = "P2002")) {
      return res.status(statusCode).json({
        success: false,
        message: "User already exists",
        errMessage: err.message.slice(err.message.indexOf("Unique")),
      });
    }
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
