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

// GET a specific land by ID
router.get('/:id', async (req, res) => {
    try {
      const land = await Land.findById(req.params.id);
      if (!land) return res.status(404).json({ message: 'Land not found' });
      res.json(land);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;