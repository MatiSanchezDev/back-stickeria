import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hola soy el log");
  next();
};

export { logMiddleware };
