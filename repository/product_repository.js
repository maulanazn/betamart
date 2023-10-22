import db from './../config/database.js'

export const CreateProduct = (data) => {
    db.parallelize(() => {
        db.run("BEGIN");
        db.run("INSERT INTO products (id, user_id, name, stock, category, price) VALUES (?,?,?,?,?,?)", [data.id, data.user_id, data.name, data.stock, data.category, data.price], err => {
            if (err) {
                db.run("ROLLBACK")
            }
            db.run("COMMIT")
        });
    });
}

export const GetProductById = (id, callback) => {
    db.serialize(() => {
        db.run("BEGIN")
        db.get("SELECT id, user_id FROM products WHERE id = ?", [id], (err, row) => {
            if (err) {
                db.run("ROLLBACK")
            }
            
            db.run("COMMIT")
            callback(err, row)
        });
    })
}