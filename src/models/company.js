const { Schema, model } = require("mongoose");

const CompanySchema = new Schema({
  createdAt: Date,
  name: String,
  imageUrl: String
});

module.exports = model("Company", CompanySchema);
