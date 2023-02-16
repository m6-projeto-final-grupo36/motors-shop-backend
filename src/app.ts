import "reflect-metadata";
import express, { Application } from "express";
import { advertiserRouter } from "./routes/advertiser.routes";

const app: Application = express();

app.use(express.json());
let cors = require("cors");

app.use(cors());

app.use("/advertisers", advertiserRouter);
app.listen(3000, () => {
  console.log("Server running in port 3000");
});
