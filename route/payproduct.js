import app from 'express'
import {authenticateUser} from './../middleware/JwtAuth.js'
import { addToPaymentList } from '../service/payproduct.js';

const router = app();

router.post("/pay/product", authenticateUser,  addToPaymentList)

export default router