const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET ROUTE

// Setup a GET route to get all the shoppingList from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM "shopping" ORDER BY "id" LIMIT 50;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})



// POST ROUTE
router.post('/', (req, res) => {
    console.log(req.body);
    const sqlText = `INSERT INTO "shopping" 
                        ( "item", "quantity", "unit" ) 
                    VALUES 
                        ( $1, $2, $3 )
                    `;
    pool.query(sqlText, [req.body.item, req.body.quantity, req.body.unit])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


// DELETE ROUTE

/**
 * Server-side code for removing all items from the datab
 */
router.delete('/clear', (req, res) => {
    console.log(req.params);
    const queryText = `DELETE FROM "shopping";`;
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log("error in /clear DELETE", error);
        res.sendStatus(500);
    });

});

router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const queryText = `DELETE FROM "shopping" WHERE "id" = $1;`;

    pool.query(queryText, [itemId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log("error in /list DELETE", error);
        res.sendStatus(500);
    });
});

// PUT ROUTE
router.put('/:id', (req, res) => {

    const sqlText = `UPDATE "shopping"
                    SET "purchased" = 'TRUE'
                    WHERE "id" = $1
                    `;
    pool.query(sqlText, [req.params.id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
    });

    // Code added by Asif
    router.put('/reset-all', (req, res) => {
   
        const sqlText = `UPDATE "shopping" SET "purchased" = false`;
        pool.query(sqlText)
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500);
            });
    });
    // End of code added by Asif

    module.exports = router;