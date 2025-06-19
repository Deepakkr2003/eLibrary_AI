/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import cse from '../../assets/cse.jpg';

function SubjectForCSE5() {
  const navigate = useNavigate();

  const semester5 = [
    {
      id: 1,
      src: cse,
      title: 'Artificial Intelligence',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: cse,
      title: 'Database Management Systems',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: cse,
      title: 'Formal Language and Automata Theory',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: cse,
      title: 'Professional Skill Development',
      style: 'shadow-purple-500',
    },
    {
      id: 5,
      src: cse,
      title: 'Software Engineering',
      style: 'shadow-green-500',
    },
    {
      id: 6,
      src: cse,
      title: 'Software Training',
      style: 'shadow-red-400',
    },
    {
      id: 7,
      src: cse,
      title: 'MOOCS',
      style: 'shadow-red-400',
    },
    {
      id: 8,
      src: cse,
      title: 'Contitution Of India',
      style: 'shadow-red-400',
    },
    {
      id: 9,
      src: cse,
      title: 'Summer Entrepreneurship-II',
      style: 'shadow-red-400',
    },
  ];

  const handleClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/cse/sem5/${formattedTitle}`);
  };

  return (
    <div
      name="skills"
      className="mt-4 bg-gradient-to-b from-gray-800 to-black w-full h-full rounded-xl"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Semester 5
          </p>
          <p className="py-6 text-2xl font-semibold">Subjects Overview</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {semester5.map(({ id, src, title, style }) => (
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

export default SubjectForCSE5;
