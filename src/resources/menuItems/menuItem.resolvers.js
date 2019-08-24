const MenuItem = require('./menuItem.model');

const getItemsByCategory = async (_, { categoryId }) => MenuItem.find({ category: categoryId, active: true });

module.exports = {
  Query: {
    getItemsByCategory
  }
};
