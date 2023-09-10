-- migrate:up
CREATE TABLE perfomers (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  perfomer_name VARCHAR(80) NOT NULL,
  perfomer_description VARCHAR(500) NOT NULL,
  CONSTRAINT perfomers_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE perfomers;
