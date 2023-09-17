-- migrate:up
ALTER TABLE products ADD important_notice VARCHAR(500) NULL AFTER description;
ALTER TABLE products ADD discount_information VARCHAR(500) NULL AFTER important_notice;

ALTER TABLE wishlists DROP FOREIGN KEY wishlists_product_option_id_fkey;
ALTER TABLE wishlists RENAME COLUMN product_option_id TO product_id;
ALTER TABLE wishlists ADD CONSTRAINT wishlists_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id);

ALTER TABLE thumbnail_images DROP FOREIGN KEY thumbnail_images_product_option_id_fkey;
ALTER TABLE thumbnail_images RENAME COLUMN product_option_id TO product_id;
ALTER TABLE thumbnail_images ADD CONSTRAINT thumbnail_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id);

ALTER TABLE product_detail_images DROP FOREIGN KEY product_detail_images_product_option_id_fkey;
ALTER TABLE product_detail_images RENAME COLUMN product_option_id TO product_id;
ALTER TABLE product_detail_images ADD CONSTRAINT product_detail_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id);

-- migrate:down

