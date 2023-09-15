-- migrate:up
ALTER TABLE products ADD place VARCHAR(100) NOT NULL; 
ALTER TABLE product_options ADD end_date DATE NOT NULL;
ALTER TABLE reviews ADD title VARCHAR(200) NOT NULL;

-- migrate:down

