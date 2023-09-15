-- migrate:up
ALTER TABLE users MODIFY kakao_id VARCHAR(50) NULL;
ALTER TABLE users MODIFY birthdate VARCHAR(50) NULL;
ALTER TABLE users MODIFY user_name VARCHAR(50) NULL;
ALTER TABLE users MODIFY email VARCHAR(100)  NOT NULL UNIQUE;
ALTER TABLE users MODIFY nickname VARCHAR(80) NOT NULL UNIQUE;

ALTER TABLE wishlists DROP FOREIGN KEY wishlists_user_id_fkey;
ALTER TABLE wishlists DROP FOREIGN KEY wishlists_product_option_id_fkey;

ALTER TABLE wishlists ADD UNIQUE unique_wishlists (user_id, product_option_id);

ALTER TABLE wishlists ADD CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE wishlists ADD CONSTRAINT wishlists_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id);

-- migrate:down
