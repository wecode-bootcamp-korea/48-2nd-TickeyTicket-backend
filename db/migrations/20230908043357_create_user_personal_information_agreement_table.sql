-- migrate:up
CREATE TABLE user_personal_information_agreement (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  agreement_content VARCHAR(500) NOT NULL,
  CONSTRAINT user_personal_information_agreement_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE user_personal_information_agreement;
