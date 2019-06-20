const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  identityProviderId: String,
  createdAt: Date,
  name: String,
  phone: String,
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = model("User", UserSchema);
