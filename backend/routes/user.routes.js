import { Router } from "express";
import {} from '../controllers/user.controllers.js'

const userRouter = Router()

userRouter.route("/signup").post();
userRouter.route("/login").post();

export default userRouter