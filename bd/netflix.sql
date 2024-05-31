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

INSERT into Movies (title,genre,image,category,`year`)
values ("Mamma Mia","Musical","https://upload.wikimedia.org/wikipedia/en/a/a6/MammaMiaTeaserPoster.JPG","Top 10", 2008);

SELECT title, genre FROM Movies where `year`> 2000; 
SELECT * FROM Movies where genre= "Comedia";
UPDATE Movies set `year`= 1997 where title = "La vita è bella";

SELECT * FROM actors where birthday > "1950-01-01" and birthday< "1960-12-31";
DELETE FROM Users where `name` like "M%";

ALTER TABLE Users ADD COLUMN fk_idMovies INT;
ALTER TABLE Users ADD FOREIGN KEY (fk_idMovies) REFERENCES Movies (idMovies);
SELECT * from Users;

ALTER TABLE Movies ADD COLUMN fk_idUsers INT;
ALTER TABLE Movies ADD FOREIGN KEY (fk_idUsers) REFERENCES Users (idUser);

INSERT INTO users_has_movies (idMovies, idUser) values (3 and 2, 2);

UPDATE users_has_movies set idMovies = 4 where idUser = 2 ;

CREATE TABLE users_has_movies (
  idMovies int auto_increment primary key not null,
  idActor int auto_increment primary key not null
  );

SELECT*FROM users_has_movies inner join movies on actors= idMovies,idActors;

