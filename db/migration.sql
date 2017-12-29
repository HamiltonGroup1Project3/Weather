\c top_shelf;

--drop tables if it already exists--
DROP TABLE if EXISTS type;
DROP TABLE if EXISTS beer;
DROP TABLE if EXISTS x_ref_table;

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

--create xref table --
CREATE TABLE x_ref_table (
beer_id INTEGER NOT NULL REFERENCES beer,
style_type_id INTEGER NOT NULL REFERENCES type,
PRIMARY KEY(beer_id, style_type_id)
);

CREATE INDEX ON x_ref_table(style_type_id);







