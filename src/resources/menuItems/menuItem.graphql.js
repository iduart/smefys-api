module.exports = `
  type MenuItem {
    _id: ID!
    createdAt: String!
    name: String!
    price: Int!
    category: Category!
    imageUrl: String
  }

  input newMenuItem {
    name: String!
    price: Int!
    category: newCategory!
    imageUrl: String
  }
`;