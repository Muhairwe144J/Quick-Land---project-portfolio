const express = require('express');
const router = express.Router();
const Land = require('../models/Land');

// Get all land listings
router.get('/', async (req, res) => {
    try {
        const lands = await Land.find();
        res.json(lands);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
