-- migrate:up
CREATE TABLE business_registration_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  registration_image_url VARCHAR(1000) NOT NULL,
  CONSTRAINT business_registration_images_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE business_registration_images;
