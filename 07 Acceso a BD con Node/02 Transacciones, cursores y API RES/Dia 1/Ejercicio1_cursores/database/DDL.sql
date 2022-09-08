CREATE DATABASE clientes;

CREATE TABLE usuarios (
  first_name varchar(100),
  last_name varchar(100),
  email varchar(100)
);

COPY usuarios(first_name, last_name, email) 
FROM 'C:\Users\CursoJavaScript\Downloads\usuarios.csv' 
DELIMITER ',' CSV HEADER;