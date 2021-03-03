BEGIN;

DROP TABLE IF EXISTS users, products, bucket , productbucket,comments;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  phoneNumber VARCHAR(255),
  password VARCHAR(255),
  type VARCHAR(255)

);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  image VARCHAR(255),
  price INTEGER,
  quantity INTEGER,
  category VARCHAR(255)
);

CREATE TABLE bucket (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE productBucket (
  id SERIAL PRIMARY KEY,
  bucket_id INTEGER REFERENCES bucket(id),
  product_id INTEGER REFERENCES products(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255),
phoneNumber VARCHAR(255),
comment TEXT
);

INSERT INTO products(name,description,price,category,image,quantity)  VALUES
  ('Bounty','coconut and chocolate ice cream',4,'ice cream','/products_img/bounty.png',100),
  ('Cadbury','cramel and milk ice cream, 500 ml',25,'ice cream','/products_img/cadbury.png',100),
  ('Crunchie','caramel milk and choclolate chips ice cream, 500 ml',25,'ice cream','/products_img/crunchie.jpg',100),
  ('Kinder milk chocolate coated',' kinder milk on stick coated with chocolate',4,'ice cream','/products_img/kinder stick.jpg',100),
  ('milka sensations','milka sensations bescuits',10,'chocolate','/products_img/milka sensations.jpg',100),
  ('kinder cards','kinder cards snacks',4,'chocolate','/products_img/kinder-cards-snacks1.png',100),
  ('Coke','coca cola 330ml',5,'drinks','/products_img/coca-cola-can-034.jpg',100);
  
    
 INSERT INTO users(email,firstName,lastName,phoneNumber,password,type) VALUES 
  ('admin@blueberries.com','admin','admin','0547492796','$2a$10$rCbJsO5qPCBeDKBMp7tbqOdwNtLfcJdWH9DoUzuwwFhJS0LBBjF5C','admin');

   INSERT INTO comments(name,email,phoneNumber,comment) VALUES 
  ('ebraheem','ave.brhom@gmail.com','0527812946','nice Shop');
    
  


COMMIT;