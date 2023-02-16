import "reflect-metadata";
import express, { Application } from "express";
import { announcementRouter } from "./routes/announcement.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

export const app: Application = express();

app.use(express.json());
let cors = require("cors");

app.use(cors());

app.use("/announcements", announcementRouter);

app.use(handleErrorMiddleware);
