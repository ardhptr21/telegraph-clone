import { doc, setDoc, Timestamp } from '@firebase/firestore';
import React from 'react';
import { IState as IAppState } from '../App';
import { db } from '../config/firebaseConfig';

interface IProps {
  note: IAppState['note'];
}

const Button: React.FC<IProps> = ({ note }) => {
  const handlePublish = async (): Promise<any> => {
    // generate random string
    const id = Math.random().toString(36).slice(2, 9);
    const slug = note.title.toLowerCase().replace(/\s/g, '-') + '-' + id;
    const data = {
      ...note,
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, 'notes', slug), data);
    window.location.href = '/';
  };

  return (
    <button
      className="absolute px-8 py-2 font-bold text-black uppercase transition duration-300 border-2 border-black rounded-full top-10 right-10 hover:bg-black hover:text-white"
      onClick={handlePublish}
    >
      Publish
    </button>
  );
};

export default Button;
