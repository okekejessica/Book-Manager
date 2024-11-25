# Book Manager API

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Allowed Genre Options](#allowed-genre-options)
4. [Technologies Used](#technologies-used)
5. [Setup Instructions](#setup-instructions)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Set Up Environment Variables](#set-up-environment-variables)
   - [Set Up MongoDB](#set-up-mongodb)
   - [Run the Backend Server](#run-the-backend-server)
6. [Access the API](#access-the-api)
7. [Test the Endpoints](#test-the-endpoints)
   - [Book Endpoints](#book-endpoints)
8. [Example Requests and Responses](#example-requests-and-responses)
   - [Get All Books](#get-all-books)
   - [Add a New Book](#add-a-new-book)
9. [Error Handling](#error-handling)
10. [Deployment](#deployment)
11. [Conclusion](#conclusion)

## Overview

The **Book Manager API** is a RESTful API that allows users to manage a collection of books in a simple and efficient manner. This API supports CRUD (Create, Read, Update, Delete) operations, enabling users to add new books, retrieve details of existing books, update book information, and delete books from the collection.

### Key Features

- **Get All Books**: Retrieve a list of all books in the collection.
- **Get Book Details**: Retrieve detailed information about a specific book using its unique ID.
- **Create a New Book**: Add new books with details such as title, author, and genre.
- **Update Existing Books**: Modify the details of existing books using their unique IDs.
- **Delete Books**: Remove books from the collection by their ID.
- **Validation**: Ensure that all required fields are provided and that genres are valid.

### Allowed Genre Options

When creating or updating a book, the genre must be one of the following options:

- **Comedy**
- **Romance**
- **Tragedy**
- **Horror**

Any attempt to use a genre outside of these options will result in a validation error.

### Technologies Used

- **Node.js**: The server-side runtime environment.
- **Express.js**: A web application framework for Node.js, used for creating APIs.
- **MongoDB**: A NoSQL database used for storing book information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Postman**: A powerful API development tool that simplifies the process of testing, documenting, and managing APIs.

## Setup Instructions

### Clone the repository:

`git clone https://github.com/okekejessica/Book-Manager`

### Install dependencies:

- `cd Book-Manager`
- `npm install`

### Set Up Environment Variables

- Install the dotenv package load environment variables

    `npm install dotenv`

- Create a .env file in the root directory of the project. This file will store your environment variables, such as database connection strings.
  Example variable to include:

MONGO_URI=<your_mongodb_uri>

### Set up MongoDB:

- Install MongoDB if not already installed or use MongoDB Atlas
- Create a MongoDB database named `Book-Manager`(or whatever name you specified in your .env file). and obtain the connection URI.
- Update the .env file in the root of your project with your MongoDB URI.

### Run the backend server:

- `npm run dev`

## Access the API

Base URL

The base URL for local testing :
http://localhost:4000/api/books

## Test the Endpoints

### Book Endpoints

- **GET /books**: Retrieve a list of all books.
- **POST /books**: Add a new book. Required fields in the request body: title, author, genre.
- **GET /books/{id}**: Retrieve a specific book by ID.
- **PUT /books/{id}**: Update a specific book by ID. Required fields in the request body: title, author, genre.
- **DELETE /books/{id}**: Delete a specific book by ID.

## Example Requests and Responses

### Get All Books:

Request:

GET http://localhost:4000/api/books

Response:

[
{
"id": "1",
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"genre": "Tragedy"
},

{
"id": "2",
"title": "To Kill a Mockingbird",
"author": "Harper Lee",
"genre": "Tragedy"
}
]

### Add a New Book:

Request:
POST http://localhost:4000/api/books

{
"title": "1984",
"author": "George Orwell",
"genre": "Tragedy"
}

Response:

{
"id": "3",
"title": "1984",
"author": "George Orwell",
"genre": "Tragedy"
}

## Error Handling

1. Route Not Found (404)

When a requested route does not exist, the API will return a 404 status code with the following message

{
"message": "Route not found"
}

2. Invalid ID Format (400)

If the provided ID is not valid (e.g., not a valid MongoDB ObjectID), the API will return a 400 status code with a message indicating the issue:

{
"message": "ID: <provided_id> is not valid"
}

3. Validation Errors (400)

If the required fields (`title`, `author`, `genre`) are missing in the request body, the API will return a 400 status code with the following message

{
"message": "Title, author, and genre are required."
}

## Deployment

The Book Manager API is deployed on [Render]. You can access the live API at the following link:

- **Live API**: [https://book-manager-dr4o.onrender.com/api/books]

## Conclusion

This README provides a comprehensive guide to using the Book Manager API. 

**GitHub Repository**: https://github.com/okekejessica/Book-Manager
**Deployed API**: https://book-manager-dr4o.onrender.com/api/books
