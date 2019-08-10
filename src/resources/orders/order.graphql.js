module.exports = `
  type MenuItemQuantity {
    id: String!
    items: [MenuItem]
    quantity: Int!
  }

  type Order {
    _id: String!
    createdAt: String!
    deliveryDate: String!
    user: User!
    menuItems: [MenuItemQuantity]!
    total: Int!
    delivered: Boolean!
  }

  input newMenuItemQuantity {
    id: String!
    quantity: Int!
  }

  input newOrder {
    deliveryDate: String!
    user: String!
    menuItems: [newMenuItemQuantity]!
    total: Int!
    delivered: Boolean
  }
`;
