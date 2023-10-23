import app from 'express'
import { addProduct, getProducts } from '../service/product.js';
import {authenticateUser} from './../middleware/JwtAuth.js'

const router = app();

router.post("/product", authenticateUser,  addProduct)
router.get("/product",  getProducts)

export default router