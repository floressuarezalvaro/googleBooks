const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
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
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
