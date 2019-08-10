const Category = require('./category.model');

const getCategories = async () => Category.find();

module.exports = {
  Query: {
    getCategories
  }
};
