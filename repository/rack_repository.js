import db from './../config/database.js'

export const CreateRack = (data) => {
    db.serialize(() => {
        db.run("BEGIN");
        db.run("INSERT INTO rack (id, user_id, product_id, quantity, location) VALUES (?,?,?,?,?)", [data.id, data.user_id, data.product_id, data.quantity, data.location], err => {
            if (err) {
                db.run("ROLLBACK")
            }

            db.get("SELECT COUNT(product_id) AS capacity FROM rack WHERE location = ? AND user_id = ?", [data.location, data.user_id], (err, row) => {
                if (err) {
                    db.run("ROLLBACK")
                }
                
                if (row.capacity > 25) {
                    return res.status(403).json({
                        status: 403, 
                        message: "Forbidden, please use another location to store your product"
                    })
                }

                db.run("COMMIT") 
            })
        });
    });
}
