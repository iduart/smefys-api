const moment = require('moment');
const OrderModel = require('./order.model');
const UserModel = require('../users/user.model');
const { getUserByProviderId } = require('../users/user.resolvers');

const mapOrder = data => ({
  deliveryDate: moment(new Date(data.deliveryDate)),
  user: data.user,
  menuItems: data.menuItems,
  total: data.total,
  delivered: false
});

const createOrder = async data => {
  const newOrder = mapOrder(data.order);

  //frontend always sends authProviderId
  //find mongodb id, we don't want to store auth provider id in the order
  const user = await UserModel.findOne({ identityProviderId: newOrder.user });
  newOrder.user = user._id;

  const order = new OrderModel(newOrder);
  order.save();
  return order;
};

module.exports = {
  createOrder
};
