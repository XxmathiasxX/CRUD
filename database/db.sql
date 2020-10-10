--creacion de la base de datos
CREATE DATABASE news;
USE news;
-- creacion de la tabla (por ahora)
CREATE TABLE noticia (
    autor VARCHAR(255) NOT NULL,
    name_new VARCHAR(255) NOT NULL,
    contenido VARCHAR(10000) NOT NULL
);

--PARA MOSTRAR LAS TABLAS
SHOW TABLES;

--para ver el contenido de las tablas
describe noticia;
