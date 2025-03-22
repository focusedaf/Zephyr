import { Router } from "express";
import {getEmail} from '../controllers/cta.controllers.js'

const ctaRouter = Router()

ctaRouter.route("/").post(getEmail);

export default ctaRouter;