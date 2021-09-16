-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL(8,2),
    "unit" VARCHAR(20),
    "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping" 
    ("item", "quantity", "unit")
VALUES
    ('Apples', 5.382, 'lbs'),
    ('Bread', 1, 'loaf'),
    ('Milk', .5, 'gallon'),
    ('Almonds', 2, 'cups'),
    ('Banana', 1, 'bunch');

SELECT * FROM "shopping" ORDER BY "id" LIMIT 50;