-- Created the DB
CREATE DATABASE lost_and_found;
USE lost_and_found;

-- Created the table "schools" 
CREATE TABLE users (
  id int AUTO_INCREMENT,
  name varchar(99) NOT NULL,
  item varchar NOT NULL,
  -- Firebase key
  fb_key varchar,
  PRIMARY KEY(id)
);


