const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// GET ROUTE



// POST ROUTE
router.post('/', (req, res) => {
    console.log(req.body);
    const sqlText = `INSERT INTO "shopping-list" 
                        ( "item", "quantity", "unit" ) 
                    VALUES 
                        ( $1, $2, $3 )
                    `;
    pool.query(sqlText, [ req.body.item, req.body.quantity, req.body.unit ])
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
    const queryText = `REMOVE * FROM "shopping";`;
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log("error in /clear DELETE", error);
        res.sendStatus(500);
    });

});

// PUT ROUTE



module.exports = router;