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



// PUT ROUTE



module.exports = router;