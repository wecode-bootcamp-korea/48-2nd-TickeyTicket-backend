-- migrate:up
ALTER TABLE product_options ADD CONSTRAINT product_options_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id);
ALTER TABLE products ADD address VARCHAR(300) NOT NULL;
ALTER TABLE products ADD region_1depth VARCHAR(100) NULL;
ALTER TABLE products ADD region_2depth VARCHAR(100) NULL;
ALTER TABLE products ADD zip_code INTEGER NULL;
ALTER TABLE product_options ADD start_time TIME NOT NULL;
ALTER TABLE reviews ADD CONSTRAINT reviews_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);
ALTER TABLE thumbnail_images ADD CONSTRAINT thumbnail_images_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);
ALTER TABLE product_detail_images ADD CONSTRAINT product_detail_images_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);
ALTER TABLE performers ADD CONSTRAINT performers_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);
ALTER TABLE actor_images ADD CONSTRAINT actor_images_performer_id_fkey FOREIGN KEY (performer_id) REFERENCES performers (id);
ALTER TABLE payment_information ADD CONSTRAINT payment_information_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);
ALTER TABLE payment_information MODIFY COLUMN id INTEGER auto_increment NOT NULL;
ALTER TABLE map_coordinates MODIFY COLUMN id INTEGER auto_increment NOT NULL;

-- migrate:down
