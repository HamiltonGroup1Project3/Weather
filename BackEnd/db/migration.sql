\c top_shelf

-- create beer table --
CREATE TABLE IF not exists beer (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  type_id INTEGER NOT NULL REFERENCES type,
  description TEXT
);

CREATE INDEX ON beer (type_id);

--create type table--
CREATE TABLE IF not exists type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);


