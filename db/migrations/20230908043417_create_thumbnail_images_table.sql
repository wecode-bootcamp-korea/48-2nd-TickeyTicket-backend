-- migrate:up
CREATE TABLE thumbnail_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  thumbnail_image_url VARCHAR(1000) NOT NULL,
  CONSTRAINT thumbnail_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE thumbnail_images;
