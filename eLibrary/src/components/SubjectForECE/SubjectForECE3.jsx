import React from 'react';
import { useNavigate } from 'react-router-dom';


const semester3 = [
  {
    id: 1,
    src: 'https://placehold.co/100x100/F97316/FFFFFF?text=EEM', // Matches shadow-orange-500
    title: 'Electrical And Electronics Material',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=MATH+III', // Matches shadow-blue-500
    title: 'Mathematics-III',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: 'https://placehold.co/100x100/EAB308/000000?text=NETWORK', // Matches shadow-yellow-500
    title: 'Network Theory',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: 'https://placehold.co/100x100/A855F7/FFFFFF?text=OOP', // Matches shadow-purple-500
    title: 'Object Oriented Programming',
    style: 'shadow-purple-500',
  },
  {
    id: 5,
    src: 'https://placehold.co/100x100/22C55E/FFFFFF?text=SIG+SYS', // Matches shadow-green-500
    title: 'Signals And Systems',
    style: 'shadow-green-500',
  },
];

function SubjectForECE3() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/ece/sem3/${formattedTitle}`);
  };

  return (
    <div className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center text-white px-4 sm:px-8 lg:px-12 py-8">
        <p className="py-4">
          <span className="text-3xl sm:text-4xl font-bold border-b-4 border-white pb-1 inline-block">
            ECE - Semester 3
          </span>
        </p>
        <p className="py-4 sm:py-6 text-xl sm:text-2xl font-semibold">Subjects Overview</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center py-8">
          {semester3.map(({ id, src, title, style }) => (
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

export default SubjectForECE3;
