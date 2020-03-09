USE [H+Active]

-- remove the existing Departments table

DROP TABLE Departments;
GO


-- recreate the table using TSQL

CREATE TABLE Departments (
    DepartmentID        char(3)     NOT NULL,
    DepartmentName      char(50)    NOT NULL,
    DepartmentHead      int         NOT NULL,
    BuildingNumber      smallint    NOT NULL,
    ModificationDate    timestamp   NOT NULL,
    CONSTRAINT PK_Departments PRIMARY KEY CLUSTERED (DepartmentID)
);


-- reinsert the record for the Marketing department

INSERT INTO Departments (DepartmentID, DepartmentName, DepartmentHead, BuildingNumber)
VALUES ('mkt','Marketing',4,3);



-- add check constraint on BuildingNumber and unique constraint on DepartmentName

ALTER TABLE Departments
ADD CONSTRAINT CK_BuildingNumber
CHECK (BuildingNumber >= 1 AND BuildingNumber <= 5);

CREATE UNIQUE INDEX IX_Departments ON Departments(DepartmentName);