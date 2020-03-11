CREATE TABLE EmployeesDuplicate(
    EmployeeID int IDENTITY(1,1) NOT NULL,
    FirstName nvarchar(50) NOT NULL,
    LastName nvarchar(50) NOT NULL,
    Position nvarchar(50) NULL,
    Email nvarchar(50) NOT NULL
    );