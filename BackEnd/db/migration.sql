\c top_shelf;

--drop tables if it already exists--
DROP TABLE if EXISTS type;
DROP TABLE if EXISTS beer;

--create type table--
CREATE TABLE type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);
-- create beer table --
CREATE TABLE beer (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brewery VARCHAR(255) NOT NULL,
  type_id SERIAL NOT NULL REFERENCES type,
  description TEXT
);

CREATE INDEX ON beer (type_id);






