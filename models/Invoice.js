// models/Invoice.js
import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  client: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  invoiceNumber: { type: String, required: true, unique: true },
}, {
  timestamps: true
});

export default mongoose.model('Invoice', invoiceSchema);
