-- migrate:up
CREATE TABLE payment_information (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  payment_code VARCHAR(300) NOT NULL,
  qrcode_url VARCHAR(1000) NOT NULL,
  payment_total_quantity INTEGER NOT NULL,
  payment_total_price INTEGER NOT NULL,
  created_at TIMESTAMP,
  deleted_at DATETIME DEFAULT NULL,
  CONSTRAINT payment_information_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT payment_information_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE payment_information;
