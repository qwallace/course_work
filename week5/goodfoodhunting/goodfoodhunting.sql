
CREATE DATABASE goodfoodhunting;

\c goodfoodhunting

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  description VARCHAR(140),
  venue VARCHAR(80),
  image_url VARCHAR(200)
);

INSERT INTO dishes (name, image_url)
VALUES ('Bacon Pancakes', 'http://cdn.thelemonbowl.com/wp-content/uploads/2013/04/Whole-Wheat-Maple-Bacon-Pancakes-The-Lemon-Bowl-400x400.jpg');

ALTER TABLE dishes ADD COLUMN dish_type VARCHAR(40);
