const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: new Date()
  },
  deliveryDate: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  menuItems: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'MenuItem'
      },
      quantity: Number,
      name: String,
      price: Number,
    }
  ],
  total: Number,
  delivered: Boolean
});

module.exports = model('Order', OrderSchema);
