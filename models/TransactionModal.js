// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String },
  type: { type: String, enum: ['Revenue', 'Expense'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
