import app from 'express'
import { loginUser, registerUser } from '../service/auth';

const router = app();
const PORT = 3000

router.post("/register", registerUser)
router.post("/login", loginUser)

export default router