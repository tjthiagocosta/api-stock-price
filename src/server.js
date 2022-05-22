import express from "express";
import { router } from "./routes/stocks-router.js";
const app = new express();
app.use(express.json());

app.use("/stock", router);

app.listen(8080);
