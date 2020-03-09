CREATE DATABASE MyRecipies;
GO

USE MyRecipies

CREATE TABLE RecipeCards(
    RecipeID int IDENTITY(1,1) NOT NULL,
    RecipeName varchar(100) NOT NULL,
    Instructions varchar(max) NOT NULL,
    CONSTRAINT PK_RecipeCards PRIMARY KEY CLUSTERED (RecipeID)
    );

CREATE TABLE RecipeIngredients(
    RecipeIngredientID int IDENTITY(1,1) NOT NULL,
    RecipeID int NOT NULL,
    Ingredient char(50) NOT NULL,
    Amount float NOT NULL,
    Unit char(10) NOT NULL,
    CONSTRAINT PK_RecipeIngredients PRIMARY KEY CLUSTERED (RecipeIngredientID)
    );

INSERT INTO RecipeCards (RecipeName, Instructions)
VALUES  ('Potato Salad','Place the potatoes into a large pot, and fill with enough water to cover. Bring to a boil, and cook for about 20 minutes...'),
        ('Baked Chicken','Trim the chicken pieces of excess fat. Pat the chicken pieces dry with a paper towel. Sprinkle all sides with salt...')
        ;

INSERT INTO RecipeIngredients (RecipeID, Ingredient, Amount, Unit)
VALUES  (2,'Chicken',1,'whole'),
        (2,'Salt',3.5,'tbsp'),
        (2,'Olive Oil',4,'tbsp')
