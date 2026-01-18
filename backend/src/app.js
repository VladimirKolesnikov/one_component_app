import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { coordRouter } from "./routes/coordRouter.js";
import { authRouter } from "./routes/authRouter.js";
import { storageRouter } from "./routes/storageRouter.js";
import { authMiddleware } from "./middlewares/authMIddleware.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
  }),
);
app.use("/me/coords", authMiddleware, coordRouter);
app.use("/auth", authRouter);
app.use("/storage", storageRouter);
app.use(errorMiddleware);

app.listen(port);

// { lat: 47.8507859, lon: 35.1182867 } zp
// { lat: 50.2598298, lon: 28.6692345 } zhytomyr
// { lat: 48.6223732, lon: 22.3022569 } uzhhorod
// { lat: 48.4680221, lon: 35.0417711 } dnipro
