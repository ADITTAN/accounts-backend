const Expense = require('../models/expenseModel.js');

// @desc    Create a new expense
export const createExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all expenses
export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update an expense
export const updateExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete an expense
export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Expense.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
