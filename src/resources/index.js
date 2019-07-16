const { buildSchema } = require('graphql');
const CategorySchema = require('./categories/category.graphql');
const CategoryResolvers = require('./categories/category.resolvers');
const MenuItemSchema = require('./menuItems/menuItem.graphql');
const MenuItemResolvers = require('./menuItems/menuItem.resolvers');
const OrderSchema = require('./orders/order.graphql');
const OrderResolvers = require('./orders/order.resolvers');
const UserSchema = require('./users/users.graphql');

const schema = buildSchema(`
  type Query {
    getCategories: [Category]!
    getItemsByCategory(categoryId: ID!): [MenuItem]!
  }

  type Mutation {
    createOrder(order: newOrder!): Order
  }

  ${CategorySchema}
  ${MenuItemSchema}
  ${OrderSchema}
  ${UserSchema}
`);

const resolvers = {
  ...CategoryResolvers,
  ...MenuItemResolvers,
  ...OrderResolvers
};

module.exports = {
  schema,
  resolvers
};
