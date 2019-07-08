const MenuItem = require('../../models/menuItem');

const getMenuItemsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  if (!categoryId) {
    res.status(400);
    return;
  }

  const menuItems = await MenuItem.find({ category: categoryId });

  res.json(menuItems);
};

module.exports = getMenuItemsByCategory;
