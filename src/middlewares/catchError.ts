import { Request, Response, NextFunction, response } from "express";
import { HttpException } from "../utils/HttpException";

export function catchError(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err && err.statusCode) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }
}
