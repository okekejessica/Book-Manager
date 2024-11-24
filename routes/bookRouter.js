const express = require("express");

const {
  getAllBooks,
  createBook,
  editBook,
  deleteBook,
  eachBook,
} = require("../controller/bookController");

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", eachBook);

router.post("/", createBook);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

module.exports = router;
