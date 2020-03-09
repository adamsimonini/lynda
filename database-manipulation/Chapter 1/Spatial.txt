CREATE TABLE Locations (
    City varchar(50),
    Lat float,
    Lon float,
    Geo geography
);
GO
INSERT INTO Locations (City, Lat, Lon)
VALUES  ('Carpinteria', 34.398, -119.518),
        ('New York', 40.71, -74.005);
GO
UPDATE Locations
SET Geo = GEOGRAPHY::Point(Lat, Lon, 4326);


Select * from sys.spatial_reference_systems;


DECLARE @c geography;
DECLARE @n geography;
SET @c = (SELECT Geo FROM Locations WHERE City = 'Carpinteria');
SET @n = (SELECT Geo FROM Locations WHERE City = 'New York');
SELECT @c.STDistance(@n) as [Distance in Meters], @c.STDistance(@n)*0.0006213712 as [Distance in Miles];