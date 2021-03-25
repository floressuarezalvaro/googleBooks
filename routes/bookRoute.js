const router = require("express").Router();
const {
  getBooks,
  apiBooks,
  createBook,
  deleteBook,
} = require("../controllers/BookController");

router.get("/", getBooks);
router.put("/api", apiBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);

module.exports = router;
