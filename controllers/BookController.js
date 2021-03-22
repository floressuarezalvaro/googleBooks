const { Book } = require("../models");
module.exports = {
  createBook: async (req, res) => {
    try {
      const createNewBook = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        img: req.body.img,
      });
      res.json(await createNewBook.save());
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
