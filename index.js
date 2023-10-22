import app from 'express'
import productrouter from './route/product.js'
import authrouter from './route/auth.js'
import rackrouter from './route/rack.js'
import payproductrouter from './route/payproduct.js'
import cookieParser from 'cookie-parser';

const router = app();
const PORT = 3000

router.use(app.json())
router.use(cookieParser())

router.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "JobList API"
    })
})

router.use(productrouter)
router.use(authrouter)
router.use(rackrouter)
router.use(payproductrouter)

router.listen(PORT, () => {
    console.info(`RUNNING ON PORT ${PORT}`)
})