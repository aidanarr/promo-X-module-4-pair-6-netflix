CREATE DATABASE Netflix;
USE Netflix;

CREATE TABLE Movies (
	idMovies int auto_increment primary key not null,
    title VARCHAR(45) not null,
    genre VARCHAR(45) not null,
    image VARCHAR(1000) not null,
    category VARCHAR(45) not null,
    `year` int
);

CREATE TABLE Users (
	idUser int auto_increment primary key not null,
    `user` VARCHAR(45) not null,
    `password` VARCHAR(45) not null,
    `name` VARCHAR(45) not null,
    mail VARCHAR(45) not null,
    plan_details VARCHAR(45) not null
);

CREATE TABLE Actors (
	idActor int auto_increment primary key not null,
    `name` VARCHAR(45) not null,
    last_name VARCHAR(45) not null,
    country VARCHAR(45) not null,
    birthday date not null
);