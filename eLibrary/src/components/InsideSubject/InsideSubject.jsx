/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InsideSubject() {
  const { branch, semester, subject } = useParams();

  const subjectDisplayName = subject
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const getSubjectFolderPath = (subjectParam) => {
    if (subjectParam === 'basic-electronics-engineering') {
      return 'Basic Electronics Engineering';
    }
    if (subjectParam === 'communicative-english') {
      return 'Communicative English';
    }
    let formattedName = subjectParam
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    return formattedName;
  };

  const subjectFolder = getSubjectFolderPath(subject);

  const [selectedPDF, setSelectedPDF] = useState(null);
  const [books, setBooks] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [noMaterialsFound, setNoMaterialsFound] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const capitalizedBranch = branch.toUpperCase();

    let capitalizedSemester;
    if (semester.startsWith('sem')) {
      capitalizedSemester = 'Semester' + semester.slice(3);
    } else {
      capitalizedSemester = 'Semester' + semester;
    }
    const subjectMaterialsMap = {
      // Civil
      'CIVIL': {
        'Semester1': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/CIVIL/Semester1/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/CIVIL/Semester1/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: "/Resources/CIVIL/Semester1/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/CIVIL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mechanics': {
            books: [
              { title: "Engineering Mechanics", fileName: "/Resources/CIVIL/Semester1/Engineering Mechanics/Book/Engineering_Mechanics.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Building Material & Construction Techniques': {
            books: [
              { title: "Building Material & Construction Techniques", fileName: "/Resources/CIVIL/Semester2/Building Material & Construction Techniques/Book/Building_Material_&_Construction_Techniques.pdf" },
            ],
            pyqs: [],
          },
          'Elements Of Civil Engineering': {
            books: [
              { title: "Elements of Civil Engineering", fileName: "/Resources/CIVIL/Semester2/Elements Of Civil Engineering/Book/Elements_of_Civil_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/CIVIL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: "/Resources/CIVIL/Semester2/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Science & Sanitation': {
            books: [
              { title: "Engineering Science & Sanitation", fileName: "/Resources/CIVIL/Semester2/Engineering Science & Sanitation/Book/Engineering_Science_&_Sanitation.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/CIVIL/Semester2/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
        },
      },

      // Cse
      'CSE': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: "/Resources/CSE/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/CSE/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: "/Resources/CSE/Semester1/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: "/Resources/CSE/Semester1/Workshop/Book/Workshop.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/CSE/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/CSE/Semester2/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/CSE/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Introduction To Web Design': {
            books: [
              { title: "Introduction To Web Design", fileName: "/Resources/CSE/Semester2/Introduction To Web Design/Book/Introduction_to_Web_Design.pdf" },
            ],
            pyqs: [],
          },
          'Python Programming': {
            books: [
              { title: "Python Programming", fileName: "/Resources/CSE/Semester2/Python Programming/Book/Python_Programming.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/CSE/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf" },
            ],
            pyqs: [],
          },
        },
      },

      // ECE
      'ECE': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: "/Resources/ECE/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/ECE/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: "/Resources/ECE/Semester1/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: "/Resources/ECE/Semester1/Workshop/Book/Workshop.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/ECE/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/ECE/Semester2/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Basic Electronics': {
            books: [
              { title: "Basic Electronics", fileName: "/Resources/ECE/Semester2/Basic Electronics/Book/Basic_Electronics.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/ECE/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: "/Resources/ECE/Semester2/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/ECE/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
        },
      },

      // EE
      'ELECTRICAL': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics Engineering", fileName: "/Resources/ELECTRICAL/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/ELECTRICAL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics ", fileName: "/Resources/ELECTRICAL/Semester1/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: "/Resources/ELECTRICAL/Semester1/Workshop/Book/Workshop.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/ELECTRICAL/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/ELECTRICAL/Semester2/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/ELECTRICAL/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: "/Resources/ELECTRICAL/Semester2/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/ELECTRICAL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf" },
            ],
            pyqs: [],
          },
        },
      },

      // IT
      'IT': {
        'Semester1': {
          'Basic Electronics Engineering': {
            books: [
              { title: "Basic Electronics", fileName: "/Resources/IT/Semester1/Basic Electronics Engineering/Book/Basic_Electronic_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/IT/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics ", fileName: "/Resources/IT/Semester1/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: "/Resources/IT/Semester1/Workshop/Book/Workshop.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/IT/Semester1/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/IT/Semester2/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/IT/Semester2/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/IT/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf" },
            ],
            pyqs: [],
          },
          'Introduction To Web Design': {
            books: [
              { title: "Introduction To Web Design", fileName: "/Resources/IT/Semester2/Introduction To Web Design/Book/Introduction_to_Web_Design.pdf" },
            ],
            pyqs: [],
          },
          'Python Programming': {
            books: [
              { title: "Python Programming", fileName: "/Resources/IT/Semester2/Python Programming/Book/Python_Programming.pdf" },
            ],
            pyqs: [],
          },
        },
      },

      // Mechanical
      'MECHANICAL': {
        'Semester1': {
          'Communicative English': {
            books: [
              { title: "Communicative English", fileName: "/Resources/MECHANICAL/Semester1/Communicative English/Book/Communicative_English.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Chemistry': {
            books: [
              { title: "Engineering Chemistry", fileName: "/Resources/MECHANICAL/Semester1/Engineering Chemistry/Book/Engineering_Chemistry.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Graphics And Design': {
            books: [
              { title: "Engineering Graphics And Design", fileName: "/Resources/MECHANICAL/Semester1/Engineering Graphics And Design/Book/Engineering_Graphics_And_Design.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics I': {
            books: [
              { title: "Engineering Mathematics I", fileName: "/Resources/MECHANICAL/Semester1/Engineering Mathematics I/Book/Engineering_Mathematics_I.pdf" },
            ],
            pyqs: [],
          },
          'Basic Electrical Engineering': {
            books: [
              { title: "Basic Electrical Engineering", fileName: "/Resources/MECHANICAL/Semester1/Basic Electrical Engineering/Book/Basic_Electrical_Engineering.pdf" },
            ],
            pyqs: [],
          },
        },
        'Semester2': {
          'Elements Of Mechanical Engineering': {
            books: [
              { title: "Elements of Mechanical Engineering", fileName: "/Resources/MECHANICAL/Semester2/Elements Of Mechanical Engineering/Book/Elements_of_Mechanical_Engineering.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Mathematics 2': {
            books: [
              { title: "Engineering Mathematics 2", fileName: "/Resources/MECHANICAL/Semester2/Engineering Mathematics 2/Book/Engineering_Mathematics_II.pdf" },
            ],
            pyqs: [],
          },
          'Engineering Physics': {
            books: [
              { title: "Engineering Physics", fileName: "/Resources/MECHANICAL/Semester2/Engineering Physics/Book/Engineering_Physics.pdf" },
            ],
            pyqs: [],
          },
          'Programming For Problem Solving': {
            books: [
              { title: "Programming For Problem Solving", fileName: "/Resources/MECHANICAL/Semester2/Programming For Problem Solving/Book/Programming_for_Problem_Solving.pdf" },
            ],
            pyqs: [],
          },
          'Workshop': {
            books: [
              { title: "Workshop", fileName: "/Resources/MECHANICAL/Semester2/Workshop/Book/Workshop.pdf" },
            ],
            pyqs: [],
          },
        },
      },
    };

    let currentSubjectBooks = [];
    let currentSubjectPyqs = [];
    setNoMaterialsFound(false);

    if (subjectMaterialsMap[capitalizedBranch] &&
      subjectMaterialsMap[capitalizedBranch][capitalizedSemester] &&
      subjectMaterialsMap[capitalizedBranch][capitalizedSemester][subjectFolder]) {

      const materials = subjectMaterialsMap[capitalizedBranch][capitalizedSemester][subjectFolder];

      currentSubjectBooks = materials.books.map(book => ({
        title: book.title,
        link: book.fileName
      }));
      console.log(`Loaded books for ${subjectDisplayName} (Branch: ${capitalizedBranch}, Semester: ${capitalizedSemester}):`, currentSubjectBooks);

      currentSubjectPyqs = materials.pyqs.map(pyq => ({
        title: pyq.title,
        link: pyq.fileName
      }));
    }

    setBooks(currentSubjectBooks);
    setPyqs(currentSubjectPyqs);

  }, [branch, semester, subject, subjectFolder]);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults("Please enter a keyword to search.");
      return;
    }

    setLoading(true);
    setSearchResults("");

    try {
      const res = await axios.post('http://localhost:8000/query', {
        prompt: searchQuery,
        model: 'llama-3.3-70b-versatile',
      });

      setSearchResults(res.data.response);
    } catch (error) {
      console.error("API Error:", error);
      setSearchResults("Error fetching response from AI. Ensure your local server is running at http://localhost:8000 and is configured to handle /query requests.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-6 rounded-lg font-inter">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-300 drop-shadow-lg">
        {subjectDisplayName}
      </h2>

      {noMaterialsFound && (
        <div className="bg-red-800 bg-opacity-50 border border-red-600 text-red-100 p-4 rounded-lg mb-8 text-center text-lg shadow-md">
          <p className="font-semibold">No materials found for this subject, semester, and branch combination.</p>
          <p className="text-sm mt-2">
            Please ensure the URL parameters (branch, semester, subject) are correct and match the data defined in the application.
            For example, if you are trying to view "Communicative English", the URL's semester segment should likely be "sem2" (e.g., `/cse/sem2/communicative-english`) or just "2" (e.g., `/cse/2/communicative-english`).
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