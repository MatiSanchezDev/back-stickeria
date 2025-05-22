import { Router } from "express";
import {
  deteleItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item";
import { sessionMiddleware } from "../middleware/session";

const router = Router();

router.get("/", sessionMiddleware, getItems);
router.get("/:id", sessionMiddleware, getItem);
router.post("/", sessionMiddleware, postItem);
router.put("/:id", sessionMiddleware, updateItem);
router.delete("/:id", sessionMiddleware, deteleItem);

export { router };
