import express from "express";
// import cors from "cors";
import connectDB from "./db/mongodb.js";
import dotenv from "dotenv";
dotenv.config();
import ctaRouter from "./routes/cta.routes.js";
import userRouter from "./routes/user.routes.js";
import contactRouter from "./routes/contact.routes.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/cta", ctaRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Zephyr");
});

app.listen(port, () => {
  console.log(`Zephyr is listening on port http://localhost:${port}`);
});
