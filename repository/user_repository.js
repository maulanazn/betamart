import db from './../config/database.js'

export const CreateUser = async (data) => {
    let script = "INSERT INTO users(username, password) VALUES($1, $2)"

    try {
        await db.query("BEGIN")
        let SQL = await db.query(script, data.username, data.password)
        await db.query("COMMit")
        return SQL
    } catch (error) {
        await db.query("ROLLBACK")
        throw new Error(error.message)
    } finally {
        db.end()
    }
}

export const VerifyUser = async (data) => {
    let script = "SELECT name FROM users WHERE name = $1"

    try {
        await db.query("BEGIN")
        let SQL = await db.query(script, data.username)
        await db.query("COMMit")
        return SQL.rows
    } catch (error) {
        await db.query("ROLLBACK")
        throw new Error(error.message)
    } finally {
        db.end()
    }
}