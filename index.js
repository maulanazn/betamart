import app from 'express'
import authRoute from './route/auth.js'

const router = app();
const PORT = 3000

router.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "JobList API"
    })
})

router.use(authRoute)

router.listen(PORT, () => {
    console.info(`RUNNING ON PORT ${PORT}`)
})