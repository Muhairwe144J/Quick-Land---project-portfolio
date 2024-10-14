const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const Transaction = require('../models/Transaction'); // Create this model
const router = express.Router();

// Admin route to fetch all transactions
router.get('/transactions', protect, admin, async (req, res) => {
  try {
    const transactions = await Transaction.find({}).populate('user', 'name email');
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch transactions' });
  }
});

module.exports = router;
