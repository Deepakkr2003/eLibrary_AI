/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import it from '../../assets/it.jpg';

function SubjectForIT6() {
  const navigate = useNavigate();

  const semester6 = [
    {
      id: 1,
      src: it,
      title: 'Computer Networks',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: it,
      title: 'Software Engineering',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: it,
      title: 'Program Elective-I',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: it,
      title: 'Program Elective-II',
      style: 'shadow-purple-500',
    },
    {
      id: 5,
      src: it,
      title: 'MOOCS',
      style: 'shadow-green-500',
    },
   
  ];

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/it/sem6/${formattedTitle}`);
  };

  return (
    <div
      name="skills"
      className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Semester 6 - IT
          </p>
          <p className="py-6 text-2xl font-semibold">Subjects Overview</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {semester6.map(({ id, src, title, style }) => (
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

export default SubjectForIT6;
