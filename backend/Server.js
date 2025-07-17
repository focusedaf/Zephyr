import express from "express";
import cors from "cors";
import connectDB from "./db/mongodb.js";
import dotenv from "dotenv";
dotenv.config();
import ctaRouter from "./routes/cta.routes.js";
import userRouter from "./routes/user.routes.js";
import contactRouter from "./routes/contact.routes.js";
import likeRouter from "./routes/like.routes.js";
import commentRouter from "./routes/comment.routes.js";
import postRouter from "./routes/post.routes.js";
import cookieParser from "cookie-parser";
import { LoggedinUsers } from "./middlewares/auth.middlewares.js";
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/cta", ctaRouter);
app.use("/api/contact", contactRouter);
app.use("/api/posts",LoggedinUsers, postRouter);


app.get("/", (req, res) => {
  res.send("Welcome to Zephyr");
});

app.listen(port, () => {
  console.log(`Zephyr is listening on port http://localhost:${port}`);
});
