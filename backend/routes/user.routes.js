import { Router } from "express";
import {LoginUser,RegisterUser} from '../controllers/user.controllers.js'

const userRouter = Router()

userRouter.route("/login").post(LoginUser);
userRouter.route("/signup").post(RegisterUser);

export default userRouter