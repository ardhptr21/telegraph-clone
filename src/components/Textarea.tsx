import React from 'react';

interface IProps {
  name: string;
  placeholder: string;
  fallback?: string;
  size?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<IProps> = ({ name, placeholder, fallback, size, value, onChange }) => {
  return (
    <div className="flex flex-row items-start justify-center w-full h-full gap-10 group">
      <div className={`group-focus-within:visible invisible text-gray-400 w-12 ${size} `}>
        {fallback ?? placeholder}
      </div>
      <textarea
        onChange={onChange}
        spellCheck="false"
        name={name}
        placeholder={placeholder}
        value={value}
        className={'outline-none focus:placeholder:invisible py-2 resize-none w-full h-full' + (size ? ` ${size}` : '')}
      />
    </div>
  );
};

export default Textarea;
