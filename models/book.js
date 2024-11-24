const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = new schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    enum: ["Comedy", "Romance", "Tragedy", "Horror"],
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema);
