import { Router } from "express";
import {
  deteleItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";
import { sessionMiddleware } from "../middleware/session";

const router = Router();

router.get("/", sessionMiddleware, getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deteleItem);

export { router };
