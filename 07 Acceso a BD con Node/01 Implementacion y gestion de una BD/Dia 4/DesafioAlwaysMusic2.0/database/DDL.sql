CREATE DATABASE escuela;

-- \ c escuela

CREATE TABLE estudiante (
  nombre VARCHAR(100) NOT NULL,
  rut VARCHAR(12),
  curso VARCHAR(100) NOT NULL,
  nivel VARCHAR(4),
  PRIMARY KEY(rut)
);

INSERT INTO estudiante VALUES ('Brian May', '12.345.678-9', 'guitarra', '7');

SELECT * FROM estudiante;

UPDATE estudiante SET nivel = '10' WHERE rut = '12.345.678-9';

SELECT * FROM estudiante WHERE rut = '12.345.678-9';

DELETE FROM estudiante WHERE rut = '12.345.678-9';