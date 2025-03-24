import { Router } from "express";
import {} from '../controllers/post.controllers.js'


const postRouter = Router()

// to fetch all the posts
postRouter.route('/posts').get()
// sort them by categories
postRouter.route('/posts/categories').get()
// upload a post
postRouter.route('/:id/upload').post()
// delete a post
postRouter.route('/:id/delete').delete()

export default postRouter