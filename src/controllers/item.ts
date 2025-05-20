import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  createItemServices,
  deleteItemServices,
  getItemServices,
  getItemsServices,
  updateItemServices,
} from "../services/stickerService";

const getItem = async (req: Request, res: Response) => {
  try {
    const response = await getItemServices(Number(req.params.id));
    res.json(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    console.log("Entre en getItems");
    const response = await getItemsServices();
    res.json(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await createItemServices(body);
    res.json(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const response = await updateItemServices(Number(req.params.id), req.body);
    res.json(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const deteleItem = async (req: Request, res: Response) => {
  try {
    const response = await deleteItemServices(Number(req.params.id));
    res.json({ "sticker: ": response });
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deteleItem };
