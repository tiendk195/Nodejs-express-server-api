import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectMogooDB from "./config/dbconfig.js";

dotenv.config();
const port = process.env.PORT || 3000;
const urlConnectDB =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/db_movies";
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);
connectMogooDB(urlConnectDB);
app.listen(port, () => console.log(`Server is running on port ${port}`));
