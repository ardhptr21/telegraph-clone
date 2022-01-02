import React from 'react';

const Button: React.FC = () => {
  return (
    <button className="absolute px-8 py-2 font-bold text-black uppercase transition duration-300 border-2 border-black rounded-full top-10 right-10 hover:bg-black hover:text-white">
      Publish
    </button>
  );
};

export default Button;
