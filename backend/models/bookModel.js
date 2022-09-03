const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    category: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true},
    situation: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);