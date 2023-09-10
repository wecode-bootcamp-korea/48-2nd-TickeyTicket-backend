-- migrate:up
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(300) NOT NULL,
  price INTEGER NOT NULL,
  available_ticket INTEGER NOT NULL,
  film_rating INTEGER NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  CONSTRAINT products_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE products;
