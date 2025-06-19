import React from 'react';
import { useNavigate } from 'react-router-dom';
import civil from '../../assets/civil.jpg';

const semester4 = [
  {
    id: 1,
    src: civil,
    title: 'Engineering Geology',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: civil,
    title: 'Introduction To Fluid Mechanics',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: civil,
    title: 'Introduction To Solid Mechanic',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: civil,
    title: 'Mechanical Engineering',
    style: 'shadow-purple-500',
  },
  {
    id: 5,
    src: civil,
    title: 'Structure Analysis',
    style: 'shadow-green-500',
  },
  {
    id: 6,
    src: civil,
    title: 'Materials, Testing And Evaluation',
    style: 'shadow-red-400',
  },
  {
    id: 7,
    src: civil,
    title: 'Disaster Preparadness And Planning',
    style: 'shadow-red-400',
  },
  {
    id: 8,
    src: civil,
    title: 'Computer-Aided Structural Analysis Laboratory',
    style: 'shadow-red-400',
  },
];

function SubjectForCivil4() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/civil/sem4/${formattedTitle}`);
  };

  return (
    <div className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
          Civil - Semester 4
        </p>
        <p className="py-6 text-2xl font-semibold">Subjects Overview</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {semester4.map(({ id, src, title, style }) => (
            <div
              key={id}
              onClick={() => handleClick(title)}
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-gray-400 font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectForCivil4;
