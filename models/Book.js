const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Array,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
