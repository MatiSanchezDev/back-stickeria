import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { loginUser } from "../services/authService";

const loginCtrl = async (req: Request, res: Response) => {
  try {
    const response = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Usuario logeado con exito.",
      user: response.user,
      session: response.session,
      token: response.session.access_token,
    });
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_USER", error);
  }
};

export { loginCtrl };
