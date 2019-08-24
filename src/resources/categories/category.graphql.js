module.exports = `
  type Category {
    _id: ID!
    createdAt: DateTime!
    name: String!
    maxAmount: Int
  }

  input newCategory {
    name: String!
    maxAmount: Int
  }
`;