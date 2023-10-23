import db from './../config/database.js'

export const PayProduct = (data) => {
    db.run("BEGIN");
    db.run(`INSERT INTO payproduct (id, user_id, product_id, status, quantity) VALUES (?,?,?,'purchased',(?))`, [data.id, data.user_id, data.product_id, data.quantity]);
    db.get("SELECT quantity FROM rack WHERE product_id = ?", [data.product_id], (err, row) => {        
        if (err) {
            db.run("ROLLBACK")
        }
        db.run(`UPDATE rack SET quantity = (${row.quantity} - ?) WHERE product_id = ?`, [data.quantity, data.product_id])
    })
    db.run("COMMIT")
}

export const GetSpecificProductStock = (data) => {
    db.run("BEGIN");
    db.run(`INSERT INTO payproduct (id, user_id, product_id, status, quantity) VALUES (?,?,?,'purchased',(?))`, [data.id, data.user_id, data.product_id, data.quantity]);
    db.get("SELECT quantity FROM rack WHERE product_id = ?", [data.product_id], (err, row) => {        
        if (err) {
            db.run("ROLLBACK")
        }
        db.run(`UPDATE rack SET quantity = (${row.quantity} - ?) WHERE product_id = ?`, [data.quantity, data.product_id])
    })
    db.run("COMMIT")
}