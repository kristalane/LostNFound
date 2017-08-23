-- Created the DB
CREATE DATABASE lost_and_found;
USE lost_and_found;

-- Created the table "stuff" 
CREATE TABLE stuff (
	id int AUTO_INCREMENT NOT NULL,
	itemtype varchar (99) NOT NULL,
	color varchar (255) NOT NULL,
	size varchar (3) NOT NULL,
	attrib varchar (255) NOT NULL,
	lost boolean,
    location varchar (255),
    createdAt datetime,
    updatedAt datetime,
	PRIMARY KEY (id)
);