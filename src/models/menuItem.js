const { Schema, model } = require("mongoose");

const MenuItemSchema = new Schema({
  createdAt: Date,
  name: String,
  price: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  imageUrl: String
});

module.exports = model("MenuItem", MenuItemSchema);
