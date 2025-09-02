// server.js
const express = require('express');
const mysql = require('mysql2/promise'); // Use mysql2/promise for async/await
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port for your backend

app.use(cors()); // Enable CORS to allow your frontend (on a different port) to access this API
app.use(express.json()); // To parse JSON request bodies

// --- MySQL Connection Pool ---
const pool = mysql.createPool({
    host: 'localhost',      // Your MySQL host (e.g., 'localhost' or IP address)
    user: 'root',           // Your MySQL username
    password: 'MeDeepak@123', // ⚠️ Replace with your actual MySQL password
    database: 'eLibrary', // The database you created
    waitForConnections: true,
    connectionLimit: 10,    // Max number of connections in the pool
    queueLimit: 0
});

// --- API Endpoints to Fetch Data ---

// Endpoint to fetch all books
app.get('/api/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, title, link, subject FROM books');
        res.json(rows); // Send the fetched books as JSON
    } catch (error) {
        console.error('Error fetching books from DB:', error);
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
});

// Endpoint to fetch all Previous Year Questions (PYQs)
app.get('/api/pyqs', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, title, link, year, subject FROM pyqs');
        res.json(rows); // Send the fetched PYQs as JSON
    } catch (error) {
        console.error('Error fetching PYQs from DB:', error);
        res.status(500).json({ message: 'Error fetching PYQs', error: error.message });
    }
});

// A combined endpoint to fetch materials (books and PYQs) for a specific subject, branch, and semester
// This is more aligned with your frontend's `useEffect` logic
app.get('/api/materials', async (req, res) => {
    const { branch, semester, subject } = req.query; // Get parameters from URL query string

    // Basic validation (you might want more robust validation)
    if (!branch || !semester || !subject) {
        return res.status(400).json({ message: 'Missing branch, semester, or subject query parameters.' });
    }

    try {
        // Fetch books for the given subject (assuming 'subject' column matches the requested subject)
        const [books] = await pool.query('SELECT id, title, link FROM books WHERE subject = ?', [subject]);

        // Fetch PYQs for the given subject
        const [pyqs] = await pool.query('SELECT id, title, link FROM pyqs WHERE subject = ?', [subject]);

        res.json({ books, pyqs }); // Send both as a single JSON object
    } catch (error) {
        console.error('Error fetching materials from DB:', error);
        res.status(500).json({ message: 'Error fetching materials', error: error.message });
    }
});


// --- Start the Server ---
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});