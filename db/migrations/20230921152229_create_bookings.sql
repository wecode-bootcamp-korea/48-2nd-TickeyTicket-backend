-- migrate:up
CREATE TABLE bookings (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  sequence INTEGER NOT NULL,
  start_date DATETIME NOT NULL,
  start_time TIME NOT NULL,
  running_time TIME NOT NULL,
  available_ticket INTEGER NOT NULL,
  thumbnail_image_url VARCHAR(1000) NOT NULL
);

-- migrate:down
DROP TABLE bookings;
