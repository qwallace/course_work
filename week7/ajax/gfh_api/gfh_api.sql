CREATE DATABASE gfh_api;

\c gfh_api;

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name varchar(100),
  venue varchar(100),
  image_url varchar(200),
  star_count integer
);
