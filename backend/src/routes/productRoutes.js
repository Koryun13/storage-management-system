const express = require('express');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protect all product routes
router.use(protect);

router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
