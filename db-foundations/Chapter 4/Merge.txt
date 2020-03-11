USE [H+Active]
CREATE TABLE CustomerUpdates (
    CustomerID int NOT NULL,
    FirstName nvarchar(50),
    LastName nvarchar(50),
    Phone nchar(13),
    Address nvarchar(255),
    City nvarchar(50),
    State nchar(2),
    Zip nchar(5)
);
GO
INSERT INTO CustomerUpdates (CustomerID, Address, City, State, Zip)
VALUES  (10051,'4515 West Elm','Newark','NJ','07102');
INSERT INTO CustomerUpdates (CustomerID, LastName)
VALUES  (10054,'Piper');
INSERT INTO CustomerUpdates (CustomerID, Phone)
VALUES  (10053,'(555)555-5555');
INSERT INTO CustomerUpdates
VALUES  (10066,'Elizabeth','Janson','(555)413-2094','1214 Barkley St','Tampa','FL','33601')


SELECT *
FROM CustomerUpdates;


MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.FirstName IS NOT NULL THEN
  UPDATE
  SET Customers.FirstName = CustomerUpdates.FirstName;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.LastName IS NOT NULL THEN
  UPDATE
  SET Customers.LastName = CustomerUpdates.LastName;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.Phone IS NOT NULL THEN
  UPDATE
  SET Customers.Phone = CustomerUpdates.Phone;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.Address IS NOT NULL THEN
  UPDATE
  SET Customers.Address = CustomerUpdates.Address;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.City IS NOT NULL THEN
  UPDATE
  SET Customers.City = CustomerUpdates.City;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.State IS NOT NULL THEN
  UPDATE
  SET Customers.State = CustomerUpdates.State;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN MATCHED AND
  CustomerUpdates.ZIP IS NOT NULL THEN
  UPDATE
  SET Customers.ZIP = CustomerUpdates.ZIP;

MERGE Customers
USING CustomerUpdates
ON Customers.CustomerID = CustomerUpdates.CustomerID
WHEN NOT MATCHED BY TARGET THEN
  INSERT (FirstName, LastName, Phone, Address, City, State, Zip)
  VALUES (CustomerUpdates.FirstName, CustomerUpdates.LastName, CustomerUpdates.Phone, CustomerUpdates.Address, CustomerUpdates.City, CustomerUpdates.State, CustomerUpdates.Zip);
