import { NextFunction, Request, Response } from "express";
import { supabase } from "../config/supabaseClient";

const sessionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const token = jwtByUser.split(" ").pop();

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      console.log(error);
      return res.status(401).json({ error: "Token inválido o expirado" });
    }

    // Podés guardar el usuario en req para usar en controladores
    (req as any).user = data.user;
    console.log(data.user);

    next();
  } catch (error) {
    console.log(error);
    res.send("SESSION_NO_VALIDA");
  }
};

export { sessionMiddleware };
