-- migrate:up
CREATE TABLE product_hashtags (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  category_hashtags_id INTEGER NOT NULL,
  CONSTRAINT product_hashtags_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT product_hashtags_category_hashtags_id_fkey FOREIGN KEY (category_hashtags_id) REFERENCES category_hashtags (id)
);

-- migrate:down
DROP TABLE product_hashtags;