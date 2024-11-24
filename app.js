require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const port = 4000;

app.use(cors());

const bookRouter = require("./routes/bookRouter");

const notFound = require("./middlewares/notFound");

app.use(express.json());

app.use("/api/books", bookRouter);

app.use(notFound);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connect");
  }
};

start();
