import "reflect-metadata";
import "express-async-errors"
import express, { Application } from "express";
import { announcementRouter } from "./routes/announcement.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { userRouter } from "./routes/user.routes";
import { sessionRouter } from "./routes/session.routes";
import { commentRouter } from "./routes/comment.routes";

export const app: Application = express();

app.use(express.json());
let cors = require("cors");

app.use(cors());

app.use("/announcements", announcementRouter);
app.use('/users', userRouter);
app.use('/login', sessionRouter);
app.use('/comments', commentRouter)

app.use(handleErrorMiddleware);
