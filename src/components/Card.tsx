import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  date: string;
  author: string;
  slug: string;
}

const Card: React.FC<IProps> = ({ title, date, author, slug }) => {
  return (
    <Link
      to={slug}
      className="flex flex-col w-full max-w-md p-4 transition duration-300 bg-white border-2 border-black cursor-pointer rounded-xl hover:bg-black hover:text-white group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          {title} <sub className="text-sm font-normal text-blue-500">{date}</sub>
        </h3>
      </div>
      <small className="mt-2 text-sm text-gray-500 group-hover:text-gray-300">{author}</small>
    </Link>
  );
};

export default Card;
