import { Router } from "express";
import { sessionMiddleware } from "../middleware/session";
import {
  deteleOrder,
  getOrder,
  getOrders,
  postOrder,
  updateOrder,
} from "../controllers/order";

const router = Router();

router.get("/", sessionMiddleware, getOrders);
router.get("/:id", sessionMiddleware, getOrder);
router.post("/", sessionMiddleware, postOrder);
router.put("/:id", sessionMiddleware, updateOrder);
router.delete("/:id", sessionMiddleware, deteleOrder);

export { router };
