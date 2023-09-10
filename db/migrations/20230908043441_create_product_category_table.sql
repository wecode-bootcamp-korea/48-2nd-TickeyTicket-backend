-- migrate:up
CREATE TABLE product_category (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  category_genres_id INTEGER NOT NULL,
  CONSTRAINT product_category_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT product_category_category_genres_id_fkey FOREIGN KEY (category_genres_id) REFERENCES category_genres (id)
);

-- migrate:down
DROP TABLE product_category;
