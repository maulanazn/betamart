const app = require('express')()
const PORT = 3000

app.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "JobList API"
    })
})

app.listen(PORT, () => {
    console.info(`RUNNING ON PORT ${PORT}`)
})