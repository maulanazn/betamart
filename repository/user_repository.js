import { hashPassword } from '../helper/AuthAction.js';
import db from './../config/database.js'

export const CreateUser = async (data) => {
    let hashedPassword = hashPassword(data.password)
    db.run("BEGIN");
    db.run("INSERT INTO users (id, username, password) VALUES (?,?,?)", [data.id, data.username, hashedPassword], err => {
        if (err) {
            db.run("ROLLBACK")
        }
        db.run("COMMIT")
    });
}

export const VerifyUser = async (username, callback) => {
    db.serialize(() => {
        db.run("BEGIN")
        db.get("SELECT id, username FROM users WHERE username = ?", [username], (err, row) => {
            if (err) {
                db.run("ROLLBACK")
            }
            
            db.run("COMMIT")
            callback(err, row)
        });
    })
}