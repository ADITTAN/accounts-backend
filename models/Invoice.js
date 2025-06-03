// models/Invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  client: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  invoiceNumber: { type: String, required: true, unique: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Invoice', invoiceSchema);
