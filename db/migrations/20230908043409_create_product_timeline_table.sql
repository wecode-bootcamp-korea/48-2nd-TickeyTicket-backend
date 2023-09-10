-- migrate:up
CREATE TABLE product_timeline (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  sequence INTEGER NOT NULL,
  start_datetime DATETIME NOT NULL,
  running_time INTEGER NOT NULL,
  CONSTRAINT product_timeline_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_timeline;