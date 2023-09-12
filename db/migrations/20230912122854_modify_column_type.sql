-- migrate:up
ALTER TABLE products MODIFY zip_code VARCHAR(50) NULL;

-- migrate:down

