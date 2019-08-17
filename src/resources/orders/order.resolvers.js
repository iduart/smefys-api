const moment = require('moment');
const OrderModel = require('./order.model');
const MenuItemModel = require('../menuItems/menuItem.model');
const UserModel = require('../users/user.model');

const mapOrder = data => ({
  deliveryDate: moment(new Date(data.deliveryDate)),
  user: data.user,
  menuItems: data.menuItems,
  total: data.total,
  delivered: false
});

const createOrder = async (_, data) => {
  const newOrder = mapOrder(data.order);

  //frontend always sends the Id of the Identity provider
  //find mongodb id, we don't want to store auth provider id in the order
  const user = await UserModel.findOne({ identityProviderId: newOrder.user });
  newOrder.user = user._id;

  const order = new OrderModel(newOrder);
  order.save();
  return order;
};

const getOrdersByUser = async (_, { userId }) =>
  OrderModel.find({ user: userId }).sort({ createdAt: -1 }).limit(10);

const getOrder = async (_, { id }) => OrderModel.findOne({ _id: id });

const item = ({ id }) => MenuItemModel.findOne({ _id: id });

module.exports = {
  Query: {
    getOrdersByUser,
    getOrder,
  },
  Mutation: {
    createOrder
  },
  MenuItemQuantity: {
    item
  }
};
