const MenuItem = require('./menuItem.model');

const getItemsByCategory = async ({ categoryId }) => MenuItem.find({ category: categoryId });

module.exports = {
  getItemsByCategory
};
