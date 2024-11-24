const Book = require("../models/book");
const validateID = require("../utils/validateID");


const validGenres = ["Comedy", "Romance", "Tragedy", "Horror"];

// ==Function to get all the books===

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving books",
      error: error.message,
    });
  }
};

// == Function for creating a new book ===

const createBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;

    if (!title || !author || !genre) {
      return res
        .status(400)
        .json({ message: "Title, author, and genre are required." });
    }

    
    if (!validGenres.includes(genre)) {
      return res.status(400).json({
        message: `Genre must be one of the following: ${validGenres.join(
          `, `
        )} `,
      });
    }

    const book = await Book.create(req.body);
    res.status(201).json({ message: "New Book created successfully", book });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the book",
      error: error.message,
    });
  }
};

// ==Function to update an existing book ==

const editBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  const { title, author, genre } = req.body;

  if (!title && !author && !genre) {
    return res.status(400).json({
      message: "At least one of title, author, or genre is required.",
    });
  }

  
  if (genre && !validGenres.includes(genre)) {
    return res.status(400).json({
      message: `Genre must be one of the following: ${validGenres.join(`, `)} `,
    });
  }

  try {
    const book = await Book.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book Updated Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the book",
      error: error.message,
    });
  }
};

// == Function to retrieve details of a particular book ==

const eachBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  try {
    const book = await Book.findOne({ _id: id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving the book",
      error: error.message,
    });
  }
};

//== Function to delete a book by id ==

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} is not valid` });
  }

  try {
    const book = await Book.findOneAndDelete({ _id: id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book Successfully Deleted" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the book",
      error: error.message,
    });
  }
};

module.exports = { getAllBooks, createBook, editBook, deleteBook, eachBook };
