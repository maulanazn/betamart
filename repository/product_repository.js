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

export const GetAllProduct = (data, callback) => {
    db.serialize(() => {
        db.run("BEGIN")
        db.all(`SELECT products.name as name, products.stock as stock, products.price as price, rack.location as location FROM products JOIN rack ON products.id = rack.product_id  WHERE stock LIKE '%${data.quantity}%' UNION SELECT products.name as name, products.stock as stock, products.price as price, rack.location as location FROM products JOIN rack ON products.id = rack.product_id WHERE location LIKE '%${data.location}%' UNION SELECT products.name as name, products.stock as stock, products.price as price, rack.location as location FROM products JOIN rack ON products.id = rack.product_id WHERE price LIKE '%${data.price}%' UNION SELECT products.name as name, products.stock as stock, products.price, rack.location as location FROM products JOIN rack ON products.id = rack.product_id WHERE name LIKE '%${data.name}%'`, (err, row) => {
            if (err) {
                db.run("ROLLBACK")
            }

            db.run("COMMIT")
            callback(err, row)
        })
    })
}