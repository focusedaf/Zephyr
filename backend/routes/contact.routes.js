import {Router} from 'express'
import {createContact} from '../controllers/contact.controllers.js'

const contactRouter = Router()

contactRouter.route('/').post(createContact)

export default contactRouter