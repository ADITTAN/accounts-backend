const express = require('express');
const {
  createInvoice,
  updateInvoice,
} = require('../controllers/invoiceController');

const router = express.Router();

router.post('/', createInvoice);

router.put('/:id', updateInvoice);

module.exports = router;
