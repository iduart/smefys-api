const Category = require('./category.model');

const getCategories = async () => Category.find({ active: true });

module.exports = {
  Query: {
    getCategories
  }
};
