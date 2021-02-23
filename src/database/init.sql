BEGIN;

DROP TABLE IF EXISTS users, products, bucket , productbucket;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
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

INSERT INTO products(name,description,price,category,image,quantity)  VALUES
  ('Bounty','coconut and chocolate ice cream',4,'ice cream','./img/bounty.png',100),
  ('Cadbury','cramel and milk ice cream, 500 ml',25,'ice cream','./img/cadbury.png',100),
  ('Cote Dor chocolate','four pcs of luxury chocolate ice cream',45,'ice cream','./img/cote dor chocolate.jpg',100),
  ('Crunchie','caramel milk and choclolate chips ice cream, 500 ml',25,'ice cream','./img/crunchie.jpg',100),
  ('Kinder milk chocolate coated',' kinder milk on stick coated with chocolate',4,'ice cream','./img/kinder stick.jpg',100),
  ('milka sensations','milka sensations bescuits',10,'chocolate','./img/milka sensations.jpg',100),
  ('kinder cards','kinder cards snacks',4,'chocolate','./img/kinder-cards-snacks1.png',100),
  ('Coke','coca cola 330ml',5,'drinks','./img/coca-cola-can-034.jpg',100);
  
    
 INSERT INTO users(email,firstName,lastName,phoneNumber,password,type) VALUES 
  ('admin@blueberries.com','aladdin','hammodi','0547492796','123Qwe456@sd','admin');
    
  


COMMIT;