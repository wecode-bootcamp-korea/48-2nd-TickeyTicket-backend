-- migrate:up
ALTER TABLE products MODIFY description VARCHAR(1000) NOT NULL;
ALTER TABLE products MODIFY important_notice VARCHAR(1000) NULL;
ALTER TABLE products MODIFY discount_information VARCHAR(1000) NULL;

-- migrate:down
