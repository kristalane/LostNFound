-- Created the DB
CREATE DATABASE lost_and_found;
USE lost_and_found;

-- Created the table "stuff" 
CREATE TABLE stuff (
	id int AUTO_INCREMENT NOT NULL,
	type varchar NOT NULL,
	color varchar NOT NULL,
	size varchar (3) NOT NULL,
	attrib varchar NOT NULL,
	lost boolean,
	location point,
	PRIMARY KEY (id)
)