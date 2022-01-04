import React, { ChangeEvent } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import { IState as ICreateState } from '../pages/Create';

interface IProps {
  note: ICreateState['note'];
  setNote: React.Dispatch<React.SetStateAction<ICreateState['note']>>;
}

const Form: React.FC<IProps> = ({ note, setNote }) => {
  const handleChange = (e: ChangeEvent): void => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setNote({ ...note, [target.name]: target.value });
  };

  return (
    <form className="flex flex-col items-start justify-center h-full px-5 py-10">
      <Input name="title" placeholder="Title" size="text-3xl" value={note.title} onChange={handleChange} />
      <Input name="author" placeholder="Your name" fallback="Author" value={note.author} onChange={handleChange} />
      <Textarea
        onChange={handleChange}
        name="content"
        placeholder="Your content"
        fallback="Content"
        size="text-lg"
        value={note.content}
      />
    </form>
  );
};

export default Form;
