
// Assuming `Item` is a MongoDB model similar to User
const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching item' });
  }
};

exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error creating item' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }
};