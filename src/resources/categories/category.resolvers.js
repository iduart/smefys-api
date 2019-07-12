const Category = require('./category.model');

const getCategories = async (rootValue, args, context, info) => Category.find();

module.exports = {
  getCategories
};
