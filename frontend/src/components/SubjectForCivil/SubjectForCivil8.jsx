import React from 'react';
import { useNavigate } from 'react-router-dom';


const semester8 = [
  {
    id: 1,
    src: 'https://placehold.co/100x100/F97316/FFFFFF?text=OE+III', // Matches shadow-orange-500
    title: 'Open Elective-III',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=OE+IV', // Matches shadow-blue-500
    title: 'Open Elective-IV',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: 'https://placehold.co/100x100/EAB308/000000?text=PE+V', // Matches shadow-yellow-500
    title: 'Program Elective-V',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: 'https://placehold.co/100x100/A855F7/FFFFFF?text=PE+VI', // Matches shadow-purple-500
    title: 'Program Elective-VI',
    style: 'shadow-purple-500',
  },
  {
    id: 5,
    src: 'https://placehold.co/100x100/22C55E/FFFFFF?text=PROJECT+II', // Matches shadow-green-500
    title: 'Project-II',
    style: 'shadow-green-500',
  },
];


function SubjectForCivil8() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/civil/sem8/${formattedTitle}`);
  };

  return (
    <div className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center text-white px-4 sm:px-8 lg:px-12 py-8">
        
        <p className="py-4">
          <span className="text-3xl sm:text-4xl font-bold border-b-4 border-white pb-1 inline-block">
            Civil - Semester 8
          </span>
        </p>
        
        <p className="py-4 sm:py-6 text-xl sm:text-2xl font-semibold">Subjects Overview</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center py-8">
          {semester8.map(({ id, src, title, style }) => (
            <div
              key={id}
              onClick={() => handleClick(title)}
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-24 sm:w-28 mx-auto rounded-lg" />
              <p className="mt-4 text-gray-400 font-bold text-lg sm:text-xl px-2">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectForCivil8;
