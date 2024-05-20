import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDb();

app.use("/api/users", userRouter);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Welcome new project" });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
