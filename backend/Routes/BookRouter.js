const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/BookController');

// Define the route for fetching subject materials
// The frontend will hit this route with query parameters like ?branch=CSE&semester=1&subject=...
router.get('/materials', bookController.getSubjectMaterials);

module.exports = router;
