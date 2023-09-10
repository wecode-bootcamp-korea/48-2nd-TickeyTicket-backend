-- migrate:up
CREATE TABLE user_location_agreement (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  agreement_content VARCHAR(500) NOT NULL,
  CONSTRAINT user_location_agreement_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE user_location_agreement;
