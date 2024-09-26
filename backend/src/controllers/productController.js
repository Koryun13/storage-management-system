const Product = require('../models/Product');

// Create new product
exports.createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      createdBy: req.user.userId, // Authenticated user
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('createdBy', 'name');
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, quantity },
      { new: true }
    );

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
