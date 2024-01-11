CREATE TABLE users(
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(username)
);

CREATE INDEX idx_users_username ON users(username);

CREATE TABLE products(
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    user_name VARCHAR(100),
    PRIMARY KEY(name)
);

CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_username ON products(user_name);

ALTER TABLE products ADD FOREIGN KEY(user_name) REFERENCES users(username);