INSERT INTO cuentas values (1, 20000);


INSERT INTO transacciones (descripcion, fecha, monto, cuenta) VALUES ('desc1','2022-08-01', 1000, 1);
UPDATE cuentas SET saldo = saldo + 1000 WHERE id = 1;

SELECT * FROM transacciones WHERE cuenta = 1;

SELECT saldo FROM cuentas WHERE id = 1;