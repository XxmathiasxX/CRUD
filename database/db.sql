--creacion de la base de datos
CREATE DATABASE news;
USE news;
-- creacion de la tabla (por ahora)
CREATE TABLE noticia (
    name_new VARCHAR(255) NOT NULL,
    desarrollo VARCHAR(10000) NOT NULL
);

--PARA MOSTRAR LAS TABLAS
SHOW TABLES;

--para ver el contenido de las tablas
describe noticia;
