const express = require('express');
const router = express.Router();
const getMenuItems = require('./menuItems/getMenuItems');
const getItemsByCategory = require('./menuItems/getItemsByCategory');
const createMenuItem = require('./menuItems/createMenuItem');
const getCategories = require('./categories/getCategories');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello I am an API 👋'
  });
});

router.get('/menu-items', getMenuItems)
router.get('/category/:categoryId/menu-items', getItemsByCategory)
router.post('/menu-items', createMenuItem)

router.get('/categories', getCategories);

module.exports = router;
