const MenuItem = require('../../models/menuItem');

const getMenuItems = async (req, res) => {
  const menuItems = await MenuItem.find();

  res.json(menuItems);
};

module.exports = getMenuItems;
