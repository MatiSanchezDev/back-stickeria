import { Response } from "express";
import { ZodError } from "zod";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  if (errorRaw instanceof ZodError) {
    return res.status(400).json({ errors: errorRaw.flatten().fieldErrors });
  }
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
