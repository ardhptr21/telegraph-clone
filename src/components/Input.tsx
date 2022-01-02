import React from 'react';

interface IProps {
  name: string;
  placeholder: string;
  fallback?: string;
  size?: string;
}

const Input: React.FC<IProps> = ({ name, placeholder, fallback, size }) => {
  return (
    <div className="flex flex-row items-center w-full gap-10 group">
      <div className={'group-focus-within:visible invisible text-gray-400 w-12' + (size ? ` ${size}` : '')}>
        {fallback ?? placeholder}
      </div>
      <input
        type="text"
        spellCheck="false"
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        className={'outline-none focus:placeholder:invisible py-2 w-full' + (size ? ` ${size}` : '')}
      />
    </div>
  );
};

export default Input;
