const { buildSchema } = require('graphql');
const CategorySchema = require('./categories/category.graphql');
const CategoryResolvers = require('./categories/category.resolvers');
const MenuItemSchema = require('./menuItems/menuItem.graphql');
const MenuItemResolvers = require('./menuItems/menuItem.resolvers');


const schema = buildSchema(`
  type Query {
    getCategories: [Category]!
    getItemsByCategory(categoryId: ID!): [MenuItem]!
  }

  ${CategorySchema}
  ${MenuItemSchema}
`);

const resolvers = {
  ...CategoryResolvers,
  ...MenuItemResolvers
}

module.exports = {
  schema,
  resolvers
};
