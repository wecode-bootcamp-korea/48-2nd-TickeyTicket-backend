-- migrate:up
ALTER TABLE product_options DROP FOREIGN KEY product_timeline_product_id_fkey;
ALTER TABLE reviews DROP FOREIGN KEY reviews_product_id_fkey;
ALTER TABLE thumbnail_images DROP FOREIGN KEY thumbnail_images_product_id_fkey;
ALTER TABLE product_detail_images DROP FOREIGN KEY product_detail_images_product_id_fkey;
ALTER TABLE performers DROP FOREIGN KEY perfomers_product_id_fkey;
ALTER TABLE actor_images DROP FOREIGN KEY actor_images_perfomer_id_fkey;
ALTER TABLE payment_information DROP FOREIGN KEY payment_information_product_id_fkey;

-- migrate:down
