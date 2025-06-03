const Invoice = require('../models/Invoice.js');

// Create new invoice
export const createInvoice = async (req, res) => {
  const { client, amount, description, date, invoiceNumber } = req.body;

  // Basic validation
  if (!client || !amount || !description || !date || !invoiceNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const invoice = new Invoice({ client, amount, description, date, invoiceNumber });
    const savedInvoice = await invoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    console.error('Error creating invoice:', error);

    if (error.code === 11000 && error.keyPattern?.invoiceNumber) {
      return res.status(409).json({ message: 'Invoice number already exists' });
    }

    res.status(500).json({ message: 'Failed to create invoice', error: error.message });
  }
};

// Update existing invoice
export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.json(updatedInvoice);
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({ message: 'Failed to update invoice', error: error.message });
  }
};
