-- migrate:up
ALTER TABLE users MODIFY phone_number VARCHAR(20) NULL;
ALTER TABLE users MODIFY password VARCHAR(100) NULL;
ALTER TABLE product_options MODIFY start_datetime DATE NOT NULL;
ALTER TABLE product_options MODIFY running_time TIME NOT NULL;
ALTER TABLE product_options RENAME COLUMN start_datetime TO start_date;
ALTER TABLE reviews RENAME COLUMN product_id TO product_option_id;
ALTER TABLE thumbnail_images RENAME COLUMN product_id TO product_option_id;
ALTER TABLE product_detail_images RENAME COLUMN product_id TO product_option_id;
ALTER TABLE performers RENAME COLUMN perfomer_name TO performer_name;
ALTER TABLE performers RENAME COLUMN perfomer_description TO performer_description;
ALTER TABLE performers RENAME COLUMN product_id TO product_option_id;
ALTER TABLE actor_images RENAME COLUMN perfomer_id TO performer_id;
ALTER TABLE payment_information RENAME COLUMN product_id TO product_option_id;

-- migrate:down
