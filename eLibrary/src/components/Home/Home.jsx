import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cse from '../../assets/cse.jpg';
import it from '../../assets/it.jpg';
import ece from '../../assets/ece.jpg';
import civil from '../../assets/civil.jpg';
import mech from '../../assets/mech.jpg';
import electrical from '../../assets/electrical.jpg';

function Home() {
  const [selectedSemesters, setSelectedSemesters] = useState({});

  const tech = [
    { id: 1, src: cse, title: 'CSE', style: 'shadow-orange-500' },
    { id: 2, src: it, title: 'IT', style: 'shadow-blue-500' },
    { id: 3, src: ece, title: 'ECE', style: 'shadow-yellow-500' },
    { id: 4, src: electrical, title: 'ELECTRICAL', style: 'shadow-green-500' },
    { id: 5, src: civil, title: 'CIVIL', style: 'shadow-sky-400' },
    { id: 6, src: mech, title: 'MECHANICAL', style: 'shadow-white' },
  ];

  const handleSemesterChange = (e, branchTitle) => {
    setSelectedSemesters({
      ...selectedSemesters,
      [branchTitle]: e.target.value,
    });
  };

  return (
    <div name="skills" className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white px-4 sm:px-8 lg:px-12 py-8">
        <div>
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-white p-2 inline">Branches</p>
          <p className="py-4 sm:py-6 text-xl sm:text-2xl font-semibold">Select Your Branch</p>
        </div>

        {/* Branch Selection */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center py-8">
          {tech.map(({ id, src, title, style }) => (
            // Added 'flex flex-col justify-between' and 'h-full' to make cards equal height and content distributed
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} flex flex-col justify-between h-full`}>
              <div> {/* Wrapper for top content */}
                <img src={src} alt={title} className="w-24 sm:w-28 mx-auto rounded-lg" />
                <p className="mt-4 text-gray-400 font-bold text-lg sm:text-xl">{title}</p>
              </div>

              <div className="flex flex-col items-center mt-auto"> {/* Aligns dropdown and button at bottom */}
                {/* Semester Dropdown */}
                <select
                  className="mt-4 p-2 rounded bg-gray-800 text-white text-base sm:text-lg w-11/12 mx-auto block"
                  value={selectedSemesters[title] || ''}
                  onChange={(e) => handleSemesterChange(e, title)}
                >
                  <option value="">Select Semester</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>
                </select>

                {/* Link to Semester Subjects Page with Right Arrow */}
                {/* Always render the Link element, but conditionally set its visibility/opacity */}
                <Link
                  to={`/${title.toLowerCase()}/sem${selectedSemesters[title]}`}
                  // Use 'opacity-0 pointer-events-none' to hide it but keep its space
                  // Or 'invisible' but that might cause issues with pointer-events
                  // 'selectedSemesters[title] ? '' : 'opacity-0 pointer-events-none'
                  className={`flex items-center justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded text-center w-11/12 mx-auto transition-opacity duration-300
                  ${selectedSemesters[title] ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
                  // Add hover effect only when visible
                  style={selectedSemesters[title] ? { backgroundColor: '#3b82f6' } : {}} // Tailwind hover:bg-blue-600 doesn't work with opacity-0
                >
                  <span>View Subjects</span>
                  <span className="ml-2 text-xl">&#8594;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;