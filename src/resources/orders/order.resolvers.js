const moment = require('moment');
const OrderModel = require('./order.model');

const mapOrder = data => ({
  deliveryDate: moment(new Date(data.deliveryDate)),
  user: data.user,
  menuItems: data.menuItems,
  total: data.total,
  delivered: false
});

const createOrder = async data => {
  const newOrder = mapOrder(data.order);
  const order = new OrderModel(newOrder);
  order.save();
  return order;
};

module.exports = {
  createOrder
};
