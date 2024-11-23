const express = require('express');
const authController = require('../controllers/authController');
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/items', authMiddleware, itemController.getAllItems);
router.get('/items/:id', authMiddleware, itemController.getItemById);
router.post('/items', authMiddleware, itemController.createItem);
router.put('/items/:id', authMiddleware, itemController.updateItem);

module.exports = router;
