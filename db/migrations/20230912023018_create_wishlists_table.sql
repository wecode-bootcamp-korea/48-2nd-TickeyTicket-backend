-- migrate:up
CREATE TABLE wishlists (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    product_option_id INTEGER NOT NULL,
    CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT wishlists_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE wishlists;