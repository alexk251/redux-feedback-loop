const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST a new order
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

module.exports = router;