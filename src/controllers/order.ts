import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getOrdersServices,
  getOrderServices,
  createOrderServices,
  updateOrderServices,
  deleteOrderServices,
} from "../services/orderService";

const getOrder = async (req: Request, res: Response) => {
  try {
    const response = await getOrderServices(Number(req.params.id));
    res.json({
      success: true,
      message: "Orden obtenida con éxito.",
      data: response,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDER");
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await getOrdersServices(page, limit);

    res.json(result);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

const postOrder = async ({ body }: Request, res: Response) => {
  try {
    const response = await createOrderServices(body);
    res.json({
      success: true,
      message: "Orden creada con éxito",
      data: response,
    });
  } catch (e) {
    handleHttp(res, "ERROR_POST_ORDER", e);
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const response = await updateOrderServices(Number(req.params.id), req.body);
    res.json({
      success: true,
      message: "Orden editada con éxito.",
      data: response,
    });
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ORDER", e);
  }
};

const deteleOrder = async (req: Request, res: Response) => {
  try {
    const response = await deleteOrderServices(Number(req.params.id));
    res.json({
      success: true,
      message: "Orden eliminada con éxito.",
      data: response,
    });
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ORDER");
  }
};

export { getOrder, getOrders, postOrder, updateOrder, deteleOrder };
