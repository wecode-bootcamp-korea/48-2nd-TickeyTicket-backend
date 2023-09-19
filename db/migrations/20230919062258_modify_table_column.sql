-- migrate:up
ALTER TABLE products DROP available_ticket;
ALTER TABLE product_options ADD available_ticket INTEGER NOT NULL;

-- migrate:down
