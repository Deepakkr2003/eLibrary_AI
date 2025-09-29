const mongoose = require('mongoose');

// Define the schema for the 'books' collection
const bookSchema = new mongoose.Schema({
    // MongoDB automatically handles the _id field

    bookName: { 
        type: String, 
        required: true,
        trim: true,
        description: "The official title of the book."
    },
    bookLink: { 
        type: String, 
        required: true,
        description: "The S3 URL where the PDF is stored."
    },
    semester: { 
        type: String, 
        required: true,
        description: "The academic semester (e.g., '1', '2')."
    },
    branch: { 
        type: String, 
        required: true,
        uppercase: true,
        description: "The engineering/academic branch (e.g., 'CSE', 'CIVIL')."
    },
    author: {
        type: String,
        description: "Author name(s)."
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
        description: "Timestamp of document creation."
    }
});

// The third argument ('books') ensures Mongoose uses the existing 'books' collection name
const Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book;
