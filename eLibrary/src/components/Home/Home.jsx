import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cse from '../../assets/cse.jpg';
import it from '../../assets/it.jpg';
import ece from '../../assets/ece.jpg';
import civil from '../../assets/civil.jpg';
import mech from '../../assets/mech.jpg';
import electrical from '../../assets/electrical.jpg';

function Home() {
  const [semester, setSemester] = useState(''); // State to store selected semester

  const tech = [
    { id: 1, src: cse, title: 'CSE', style: 'shadow-orange-500' },
    { id: 2, src: it, title: 'IT', style: 'shadow-blue-500' },
    { id: 3, src: ece, title: 'ECE', style: 'shadow-yellow-500' },
    { id: 4, src: electrical, title: 'ELECTRICAL', style: 'shadow-blue-500' },
    { id: 5, src: civil, title: 'CIVIL', style: 'shadow-sky-400' },
    { id: 6, src: mech, title: 'MECHANICAL', style: 'shadow-white' },
  ];

  const handleSemesterChange = (e) => {
    setSemester(e.target.value); // Update the semester state
  };

  return (
    <div name="skills" className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">Branches</p>
          <p className="py-6 text-2xl font-semibold">Select Your Branch</p>
        </div>

        {/* Branch Selection */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-gray-400 font-bold">{title}</p>

              {/* Semester Dropdown */}
              <select
                className="mt-4 p-2 rounded bg-gray-800 text-white"
                value={semester}
                onChange={handleSemesterChange}
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
              {semester && (
                <Link
                  to={`/${title.toLowerCase()}/sem${semester}`}
                  className="flex items-center mt-4 bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
                >
                  <span>View Subjects</span>
                  <span className="ml-2 text-xl">&#8594;</span>
                </Link>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
