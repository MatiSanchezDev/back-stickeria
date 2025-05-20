import "dotenv/config";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router } from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Listo escuchando en el puerto: ${PORT}`));
