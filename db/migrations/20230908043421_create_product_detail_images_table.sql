-- migrate:up
CREATE TABLE product_detail_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  product_detail_image_url VARCHAR(1000) NOT NULL,
  CONSTRAINT product_detail_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_detail_images;
