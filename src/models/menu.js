const { Schema, model } = require("mongoose");

const Items = new Schema({
  item: {
    type: Schema.Types.ObjectId,
    ref: "MenuItem"
  },
  customPrice: Number
});

const MenuSchema = new Schema({
  createdAt: Date,
  from: Date,
  to: Date,
  company: [
    {
      type: Schema.Types.ObjectId,
      ref: "Company"
    }
  ],
  menuItems: [Items]
});

module.exports = model("Menu", MenuSchema);
