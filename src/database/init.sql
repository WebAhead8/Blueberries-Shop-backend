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
  quantity INTEGER
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



COMMIT;