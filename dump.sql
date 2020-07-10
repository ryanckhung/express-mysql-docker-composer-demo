CREATE DATABASE test character SET UTF8;
USE test;


CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(11)
);

CREATE TABLE products (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(11)
);

CREATE TABLE likes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	product_id INT,
	users_id INT,
	FOREIGN KEY(users_id) REFERENCES users(id) ON DELETE CASCADE,
	FOREIGN KEY(product_id) REFERENCES products(id) 
);


INSERT INTO users (name)
VALUES ("Ada");

INSERT INTO products (name)
VALUES ("Orange");