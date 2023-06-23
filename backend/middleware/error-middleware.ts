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

  const defaultErr = {
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  };

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    defaultErr.message = err.message;
  }

  return res.status(statusCode).json(defaultErr);
};

export { notFound, errorHandler };
