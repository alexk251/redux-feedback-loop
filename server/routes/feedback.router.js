const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// Get all feedback
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback"  ORDER BY "id" DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST new feedback
router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

// DELETE an order
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;