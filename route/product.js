import app from 'express'
import { addProduct } from '../service/product.js';
import {authenticateUser} from './../middleware/JwtAuth.js'

const router = app();

router.post("/product", authenticateUser,  addProduct)

export default router