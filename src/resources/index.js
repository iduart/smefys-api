const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash.merge')
const CategorySchema = require('./categories/category.graphql');
const CategoryResolvers = require('./categories/category.resolvers');
const MenuItemSchema = require('./menuItems/menuItem.graphql');
const MenuItemResolvers = require('./menuItems/menuItem.resolvers');
const OrderSchema = require('./orders/order.graphql');
const OrderResolvers = require('./orders/order.resolvers');
const UserSchema = require('./users/user.graphql');
const UserResolvers = require('./users/user.resolvers');

const typeDefs = `
  type Query {
    getCategories: [Category]!
    getItemsByCategory(categoryId: ID!): [MenuItem]!
    getUserByProviderId(providerId: ID!): User!
    getOrdersByUser(userId: ID!): [Order]!
    getOrder(id: ID!): Order!
  }

  type Mutation {
    createOrder(order: newOrder!): Order
    createUser(user: newUser!): User
  }
  
  ${CategorySchema}
  ${MenuItemSchema}
  ${OrderSchema}
  ${UserSchema}
`;

const resolvers = merge(
  {},
  CategoryResolvers,
  MenuItemResolvers,
  OrderResolvers,
  UserResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
