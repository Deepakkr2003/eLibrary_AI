import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cse from '../../assets/cse.jpeg';
import it from '../../assets/it.jpeg';
import ece from '../../assets/ece.jpeg';
import civil from '../../assets/civil.jpeg';
import mech from '../../assets/mech.jpeg';
import electrical from '../../assets/electrical.jpeg';

function Home() {
  // Use a single state to hold the selected semester
  const [selectedSemester, setSelectedSemester] = useState('');

  const tech = [
    { id: 1, src: cse, title: 'CSE', style: 'shadow-orange-500' },
    { id: 2, src: it, title: 'IT', style: 'shadow-blue-500' },
    { id: 3, src: ece, title: 'ECE', style: 'shadow-yellow-500' },
    { id: 4, src: electrical, title: 'ELECTRICAL', style: 'shadow-green-500' },
    { id: 5, src: civil, title: 'CIVIL', style: 'shadow-sky-400' },
    { id: 6, src: mech, title: 'MECHANICAL', style: 'shadow-white' },
  ];

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div name="branches" className="mt-4 bg-gradient-to-b from-slate-900 to-slate-900 w-full rounded-xl min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white px-4 sm:px-8 lg:px-12 py-8">
        
        {/* Header and Semester Dropdown */}
        <div className="pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <p className="text-3xl sm:text-4xl font-bold border-b-4 border-white p-2 inline">
              Branches
            </p>
            <p className="py-4 sm:py-6 text-xl sm:text-2xl font-semibold">
              Select Your Branch
            </p>
          </div>
          
          {/* Common Semester Dropdown */}
          <div className="mt-4 sm:mt-0">
            <select
              className="p-2 rounded bg-gray-800 text-white text-base sm:text-lg"
              value={selectedSemester}
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
          </div>
        </div>
        
        {/* Branch Selection Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center py-8">
          {tech.map(({ id, src, title, style }) => (
            <Link
              key={id}
              to={`/${title.toLowerCase()}/sem${selectedSemester}`}
              // Disable link functionality and change cursor if no semester is selected
              onClick={(e) => {
                if (!selectedSemester) {
                  e.preventDefault();
                }
              }}
              className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style} relative overflow-hidden h-[400px] block
                ${!selectedSemester ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`
              }
            >
              <img src={src} alt={title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative z-10 flex flex-col justify-end items-center h-full text-white p-4">
                <p className="font-bold text-2xl mb-4">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;