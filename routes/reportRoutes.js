// routes/reports.js or wherever your route is defined
const express = require('express');
const router = express.Router();
const Transaction = require('../models/TransactionModal');
const { default: TransactionModal } = require('../models/TransactionModal');

router.get('/custom', async (req, res) => {
    const { from, to } = req.query;
    console.log(`Generating report from ${from} to ${to}`);
    try {
      const transactions = await TransactionModal.find({
        date: { $gte: new Date(from), $lte: new Date(to) }
      }).sort({ date: 1 });
  
      res.json(transactions);
    } catch (err) {
      console.error('Report generation failed:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
