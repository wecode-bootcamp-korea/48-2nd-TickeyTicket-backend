-- migrate:up
CREATE TABLE category_genres (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  genre_name VARCHAR(100) NOT NULL
);

-- migrate:down
DROP TABLE category_genres;