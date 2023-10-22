import app from 'express'
import {authenticateUser} from './../middleware/JwtAuth.js'
import { addToRack } from '../service/rack.js';

const router = app();

router.post("/rack/product", authenticateUser,  addToRack)

export default router