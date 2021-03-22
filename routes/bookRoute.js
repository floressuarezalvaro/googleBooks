const router = require("express").Router();
const {
  getBooks,
  createBook,
  deleteBook,
} = require("../controllers/BookController");

router.get("/", getBooks);
router.post("/", createBook);
router.delete("/", deleteBook);
