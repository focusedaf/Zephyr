import { Router } from "express";
import {} from '../controllers/comment.controllers.js'


const commentRouter = Router()

// add a comment
commentRouter.route('/:id/comments').post()
// existing comments on a post
commentRouter.route('/:id/comments').get()
// delete a comment
commentRouter.route('/comments/:id').delete()
export default commentRouter