import sqlite3 from "sqlite3"
import dotenv from "dotenv"
dotenv.config()
sqlite3.verbose()

const db = new sqlite3.Database("./config/product.db")

export default db