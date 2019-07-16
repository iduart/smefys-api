const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  createdAt: Date,
  name: {
    type: String,
    required: true
  },
  maxAmount: Number
});

module.exports = model("Category", CategorySchema);
