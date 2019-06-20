const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  createdAt: Date,
  name: String
});

module.exports = model("Category", CategorySchema);
