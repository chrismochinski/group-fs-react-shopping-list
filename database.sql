-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping" (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR(80) NOT NULL,
    "quantity" NUMBER,
    "unit" VARCHAR(20)
);

INSERT INTO "shopping" 
    ("item", "quantity", "unit")
VALUES
    ('Apples', 5, 'lbs'),
    ('Bread', 1, 'loaf'),
    ('Milk', 1, 'gallon'),
    ('Almonds', 2, 'cups'),
    ('Banana', 1, 'bunch');

SELECT * FROM "shopping" ORDER BY "id" LIMIT 50;