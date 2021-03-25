const { Book } = require("../models");
const axios = require("axios");

module.exports = {
  createBook: async (req, res) => {
    try {
      createNewBook = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        img: req.body.img,
      });
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  },
  apiBooks: async (req, res) => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.body.searchBooks}&key=${process.env.key}`
      );
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  },
  getBooks: async (req, res) => {
    try {
      const getAllBooks = await Book.find();
      res.json(getAllBooks);
    } catch (err) {
      console.log(err);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const deleteABook = await Book.findById({ _id: req.params.id });
      res.json(deleteABook);
      deleteABook.remove();
    } catch (err) {
      console.log(err);
    }
  },
};
