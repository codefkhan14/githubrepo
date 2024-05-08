const mongoose = require("mongoose");

// customer schema 
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  sessionId: { type: String, required: true, unique: true },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
