-- migrate:up
CREATE TABLE actor_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  perfomer_id INTEGER NOT NULL,
  actor_image_url VARCHAR(1000) NOT NULL,
  CONSTRAINT actor_images_perfomer_id_fkey FOREIGN KEY (perfomer_id) REFERENCES perfomers (id)
);

-- migrate:down
DROP TABLE actor_images;
