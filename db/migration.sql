\c jackhammerz;

--drop tables if it already exists--
DROP TABLE if EXISTS type;
DROP TABLE if EXISTS location;


--create type table--
CREATE TABLE type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- create brewery table many to 1 --
CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  zip INTEGER NOT NULL,
  type_id serial REFERENCES type.type_id,
  name VARCHAR(255)
);

