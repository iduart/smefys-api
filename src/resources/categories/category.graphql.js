module.exports = `
  type Category {
    _id: ID!
    createdAt: String!
    name: String!
    maxAmount: Int
  }

  input newCategory {
    name: String!
    maxAmount: Int
  }
`;