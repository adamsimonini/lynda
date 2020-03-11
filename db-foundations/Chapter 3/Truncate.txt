USE [H+Active]
SELECT *
INTO TemporaryCustomers
FROM  Customers;


USE [H+Active]
SELECT *
FROM TemporaryCustomers;


USE [H+Active]
TRUNCATE TABLE TemporaryCustomers;


USE [H+Active]
SELECT *
FROM TemporaryCustomers;


USE [H+Active]
DROP Table TemporaryCustomers;