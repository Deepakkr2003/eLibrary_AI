import React from 'react';
import { useNavigate } from 'react-router-dom';

const semester3 = [
  {
    id: 1,
    src: 'https://placehold.co/100x100/F97316/FFFFFF?text=B.E.',
    title: 'Basic Electronics',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=BIOLOGY',
    title: 'Biology For Engineering',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: 'https://placehold.co/100x100/EAB308/000000?text=CAD',
    title: 'Computer-Aided Civil Engineering Drawing',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: 'https://placehold.co/100x100/A855F7/FFFFFF?text=MECH',
    title: 'Engineering Mechanics',
    style: 'shadow-purple-500',
  },
  {
    id: 5,
    src: 'https://placehold.co/100x100/EF4444/FFFFFF?text=INTRO',
    title: 'Introduction To Civil Engineering',
    style: 'shadow-red-400',
  },
  {
    id: 6,
    src: 'https://placehold.co/100x100/06B6D4/FFFFFF?text=SURVEY',
    title: 'Surveying And Geomatics',
    style: 'shadow-green-500',
  },
  {
    id: 7,
    src: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=MATH+III',
    title: 'Mathematics-III (Probability,Theory And Statistics)',
    style: 'shadow-green-500',
  },
  {
    id: 8,
    src: 'https://placehold.co/100x100/FB923C/FFFFFF?text=HUMAN',
    title: 'Humanities-I',
    style: 'shadow-green-500',
  },
  {
    id: 9,
    src: 'https://placehold.co/100x100/78716C/FFFFFF?text=INTERN',
    title: 'Internship',
    style: 'shadow-green-500',
  },
];


function SubjectForCivil3() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/civil/sem3/${formattedTitle}`);
  };

  return (
    <div className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center text-white px-4 sm:px-8 lg:px-12 py-8">
        
        <p className="py-4">
          <span className="text-3xl sm:text-4xl font-bold border-b-4 border-white pb-1 inline-block">
            Civil - Semester 3
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

export default SubjectForCivil3;
