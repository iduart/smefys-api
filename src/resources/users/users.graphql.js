module.exports = `
  type User {
    _id: String!
    createdAt: String!
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