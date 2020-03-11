USE [H+Active]
DROP TABLE TemporaryCustomers;
SELECT *
INTO TemporaryCustomers
FROM  Customers;



SELECT *
FROM TemporaryCustomers;



DELETE
FROM TemporaryCustomers
WHERE CustomerID > 10055;



SELECT *
FROM TemporaryCustomers;