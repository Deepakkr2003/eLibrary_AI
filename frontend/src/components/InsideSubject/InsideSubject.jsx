import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



// The InsideSubject component displays books and previous year questions (PYQs)
// for a specific academic subject, based on the URL parameters.
function InsideSubject() {
  const { branch, semester, subject } = useParams();

  // Format the subject name for display (e.g., "basic-electronics-engineering" becomes "Basic Electronics Engineering")
  const subjectDisplayName = subject
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // State variables
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [books, setBooks] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [noMaterialsFound, setNoMaterialsFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(false);

  // --------------------------------------------------
  // 1. DATA FETCHING: Replaced hardcoded map with API call
  // --------------------------------------------------
  useEffect(() => {
    // 1. Normalize parameters for the backend request
    const capitalizedBranch = branch.toUpperCase();
    
    // Extract the raw semester number (e.g., '1' from 'sem1' or 'Semester1')
    const semNumber = semester.replace('sem', '').replace('Semester', ''); 

    const fetchMaterials = async () => {
      setNoMaterialsFound(false);
      setBooks([]);
      setPyqs([]);
      
      console.log(`Fetching materials for: ${capitalizedBranch}, Semester ${semNumber}, Subject ${subject}`);

      try {
        // 2. Call the API endpoint
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_REACT_API}/api/materials`, {
          params: {
            branch: capitalizedBranch,
            semester: semNumber,
            subject: subject, // Pass the subject slug as well
          }
        });

        const materials = response.data;
        
        // 3. Process Books data
        if (materials && materials.books && materials.books.length > 0) {
          const currentSubjectBooks = materials.books.map(book => ({
             // Mapping MongoDB fields to frontend state fields
            title: book.title || book.bookName, // Use 'title' from controller, fallback to 'bookName'
            link: book.link || book.bookLink,   // Use 'link' from controller, fallback to 'bookLink'
            // We can also display other fields if needed, like author: book.author
          }));
          setBooks(currentSubjectBooks);
          console.log("Loaded books from API:", currentSubjectBooks);
        }

        // 4. Process PYQs data (using placeholder structure for now)
        if (materials && materials.pyqs && materials.pyqs.length > 0) {
            const currentSubjectPyqs = materials.pyqs.map(pyq => ({
                title: pyq.title, 
                link: pyq.link 
            }));
            setPyqs(currentSubjectPyqs);
        }

        // 5. Set 'not found' status if both arrays are empty
        if ((!materials.books || materials.books.length === 0) && 
            (!materials.pyqs || materials.pyqs.length === 0)) {
            setNoMaterialsFound(true);
        }

      } catch (error) {
        console.error("Error fetching subject materials from API:", error);
        // If the server connection fails or returns an error, show the not found message
        setNoMaterialsFound(true);
      }
    };

    fetchMaterials();
    // Dependency array: Re-fetch data whenever these params change
  }, [branch, semester, subject]);

  // --------------------------------------------------
  // 2. SEARCH HANDLER (Remains Unchanged)
  // --------------------------------------------------

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults("Please enter a keyword to search.");
      return;
    }

    setLoading(true);
    setSearchResults("");

    try {
      // NOTE: This URL is different from the main data fetch API
      const res = await axios.post("http://127.0.0.1:8000/query", {
        prompt: searchQuery,
        model: "gemini-1.5-pro-latest", // This should match your backend model
      });

      setSearchResults(res.data.response);
    } catch (error) {
      console.error("API Error:", error);
      setSearchResults(
        "Error fetching response from AI. Ensure your FastAPI server is running at http://localhost:8000/query."
      );
    } finally {
      setLoading(false);
    }
  };


  // --------------------------------------------------
  // 3. RENDER (Design Unchanged)
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-gradient-to-b mt-4 from-gray-800 to-black text-white p-6 rounded-lg font-inter">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-300 drop-shadow-lg">
        {subjectDisplayName}
      </h2>

      {noMaterialsFound && (
        <div className="bg-red-800 bg-opacity-50 border border-red-600 text-red-100 p-4 rounded-lg mb-8 text-center text-lg shadow-md">
          <p className="font-semibold">No materials found for this subject, semester, and branch combination.</p>
          <p className="text-sm mt-2">
            Please ensure your backend server is running on port 3006 and the database contains records matching the URL parameters.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-blue-500/50 transition duration-300 border border-gray-600">
          <h3 className="text-2xl font-semibold mb-6 text-blue-200 flex items-center">
            <span className="mr-3">📘</span> Books
          </h3>
          <ul className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            {books.length > 0 ? (
              books.map((book, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md hover:bg-gray-600 transition duration-200">
                  <button
                    onClick={() => {
                      console.log("Attempting to set PDF:", book.link);
                      setSelectedPDF(book.link);
                    }}
                    className="text-blue-400 hover:underline hover:text-blue-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                  >
                    {book.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No books available for this subject yet.</li>
            )}
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-purple-500/50 transition duration-300 border border-gray-600">
          <h3 className="text-2xl font-semibold mb-6 text-purple-200 flex items-center">
            <span className="mr-3">📄</span> Previous Year Questions
          </h3>
          <ul className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            {pyqs.length > 0 ? (
              pyqs.map((pyq, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded-md hover:bg-gray-600 transition duration-200">
                  <button
                    onClick={() => setSelectedPDF(pyq.link)}
                    className="text-purple-400 hover:underline hover:text-purple-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-sm"
                  >
                    {pyq.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No PYQs available for this subject yet.</li>
            )}
          </ul>
        </div>
      </div>

      {selectedPDF && (
        <div className="mt-12 flex flex-col lg:flex-row gap-6 mb-12">
          <div className="bg-gray-900 p-4 rounded-lg w-full lg:w-3/4 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">📄 Viewing PDF</h3>
            <iframe
              key={selectedPDF}
              src={selectedPDF}
              title="PDF Viewer"
              className="w-full h-[500px] border border-gray-700 rounded-md shadow-inner"
              style={{ minHeight: '400px' }}
            ></iframe>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg w-full lg:w-1/4 flex flex-col items-center gap-4 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-center text-yellow-300">🔍 Search Doubts or Keywords</h3>

            <input
              type="text"
              placeholder="Search your question..."
              className="border border-gray-600 rounded-md px-4 py-2 w-full text-white bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              disabled={loading || searchQuery.trim() === ""}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>


            {searchResults && (
              <div className="mt-2 p-4 border border-green-500 rounded-lg bg-green-900/30 text-white w-full text-center whitespace-pre-wrap overflow-auto max-h-64 custom-scrollbar">
                {searchResults}
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #60a5fa;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
}

export default InsideSubject;
