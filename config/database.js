import db from "node-postgres"
import dotenv from "dotenv"
dotenv.config()

const connect_db = new db.Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export default connect_db