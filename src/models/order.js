const { Schema, model } = require("mongoose");

const MenuItemQuantity = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "MenuItem"
  },
  quantity: Number
});

const OrderSchema = new Schema({
  createdAt: Date,
  deliveryDate: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  menuItems: [MenuItemQuantity],
  total: Number,
  confirmed: Boolean
});

module.exports = model("Order", OrderSchema);
