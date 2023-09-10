-- migrate:up
CREATE TABLE category_hashtags (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  hashtag_name VARCHAR(100) NOT NULL
);

-- migrate:down
DROP TABLE category_hashtags;
