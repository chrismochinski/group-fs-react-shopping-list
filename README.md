# React Shopping List

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


*** CHECKLIST ***

[] compose checklist
** [] create database with sample values/data **
** [] item component **
    - Item object - {id: SERIAL PRIMARY KEY, name: VARCHAR(80), qty: NUMBER, unit: VARCHAR(20),}

COMPONENTS:
    [] Add Item Form Component
    [] Shopping list (reset, clear, display)
        [] Actual items component INSIDE shopping list component


** [] GET route (get/render the shopping list) **
    [] list.router.js
    [] App.jsx (axios)

[] POST route (add item via form)
    [] list.router.js
    [] App.jsx (axios)

[] DELETE route (remove from DB/remove button/etc)
    [] list.router.js
    [] App.jsx (axios)

    [] DELETE route to CLEAR WHOLE DB
        [] list.router.js (different SQL query (DELETE *?)
        [] Another DELETE route on the app.jsx / axios side?

[] PUT route (Buy - change appearance, "purchased")
    [] list.router.js
    [] App.jsx (axios)

[] CSS STYLING