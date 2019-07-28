const UserModel = require('./user.model');

const mapUser = data => {
  return {
    identityProviderId: data.identityProviderId,
    email: data.email,
    name: data.name,
    address: data.address,
    phone: data.phone
  };
};

const createUser = async data => {
  const newUser = mapUser(data.user);
  const user = new UserModel(newUser);
  user.save();
  return user;
};

const getUserByProviderId = async ({ providerId }) =>
  UserModel.findOne({ identityProviderId: providerId });

module.exports = {
  createUser,
  getUserByProviderId
};
