import { Router } from "express";
import {} from '../controllers/like.controllers.js'


const likeRouter = Router()

// to get the count of likes on a post
likeRouter.route('/likes').get()
// to like a post
likeRouter.route('/like').post()
// to unlike a post
likeRouter.route('/unlike').delete()

export default likeRouter