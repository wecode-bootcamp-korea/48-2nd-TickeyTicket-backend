-- migrate:up
ALTER TABLE product_timeline RENAME product_options;
ALTER TABLE perfomers RENAME performers;

-- migrate:down
