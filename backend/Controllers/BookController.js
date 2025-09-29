const Book = require('../Models/Book');

/**
 * @route GET /api/materials
 * @desc Fetches books and PYQs based on branch, semester, and SUBJECT
 * @access Public
 */
exports.getSubjectMaterials = async (req, res) => {
    // 1. Destructure and normalize query parameters from the frontend URL
    const { branch, semester, subject } = req.query; 

    if (!branch || !semester || !subject) {
        return res.status(400).json({ 
            error: 'Missing required query parameters: branch, semester, or subject.' 
        });
    }

    try {
        const normalizedBranch = branch.toUpperCase();
        const semesterNumber = semester.replace('sem', '').replace('Semester', '');
        
        // 🛠️ CRITICAL FIX: Normalize the incoming subject string to EXACTLY match 
        // the database format (TitleCase_with_Underscores).
        
        const searchSubject = subject
            .trim()
            .replace(/ /g, '_')     // Replace all spaces with underscores
            .replace(/-/g, '_')     // Replace hyphens with underscores (in case of 'basic-electronics')
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special regex characters
        
        // Note: We will rely on $regex and 'i' (case-insensitive) to handle 
        // minor casing differences like "for" vs "For".
        
        // 2. Prepare the filter object
        const filter = {
            branch: normalizedBranch,
            semester: semesterNumber,
            
            // 💡 FILTER: Search for the normalized subject name within the bookName
            bookName: { 
                // We use $regex and 'i' to find a partial match, e.g., 
                // search for 'Workshop' to find 'Workshop_Lab_Manual'
                $regex: new RegExp(searchSubject, 'i') 
            },
        };
        
        // 3. Query the 'books' collection
        const books = await Book.find(filter)
            .sort({ bookName: 1 });

        // ... (rest of the code is unchanged, but included for completeness)

        // 4. Prepare response data
        const booksList = books.map(book => ({
            title: book.bookName,
            link: book.bookLink,
            author: book.author,
        }));
        
        // Placeholder for PYQs 
        const pyqsList = []; 

        if (booksList.length === 0 && pyqsList.length === 0) {
            return res.status(404).json({ 
                books: [], 
                pyqs: [], 
                message: `No materials found for ${subject} in ${branch} semester ${semesterNumber}.` 
            });
        }

        // 5. Send the data back to the frontend
        res.json({
            books: booksList,
            pyqs: pyqsList
        });

    } catch (error) {
        console.error('DATABASE ERROR in getSubjectMaterials:', error.message);
        res.status(500).json({ error: 'Server error while retrieving materials.' });
    }
};