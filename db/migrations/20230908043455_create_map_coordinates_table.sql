-- migrate:up
CREATE TABLE map_coordinates (
  id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL,
  coordinate_x DECIMAL(18,11) NOT NULL,
  coordinate_y DECIMAL(18,11) NOT NULL,
  CONSTRAINT map_coordinates_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE map_coordinates;
