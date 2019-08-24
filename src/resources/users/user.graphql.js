module.exports = `
  type User {
    _id: String!
    createdAt: DateTime!
    identityProviderId: String!
    name: String!
    phone: String!
    email: String!
    address: String!
  }

  input newUser {
    identityProviderId: String!
    name: String!
    phone: String!
    email: String!
    address: String!
  }
`