const MenuItem = require('./menuItem.model');

const getItemsByCategory = async (_, { categoryId }) => MenuItem.find({ category: categoryId });

module.exports = {
  Query: {
    getItemsByCategory
  }
};
