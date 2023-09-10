-- migrate:up
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  kakao_id INTEGER NULL,
  user_name VARCHAR(100) NOT NULL,
  nickname VARCHAR(80) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  phone_number VARCHAR(100) NULL,
  birthdate DATETIME NULL,
  gender VARCHAR(50) NULL,
  profile_image VARCHAR(1000) DEFAULT "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  point DECIMAL(12, 2) NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- migrate:down
DROP TABLE users;
