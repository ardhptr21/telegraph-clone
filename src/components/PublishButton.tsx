import { doc, setDoc, Timestamp } from '@firebase/firestore';
import React from 'react';
import { IState as ICreateState } from '../pages/Create';
import { db } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
interface IProps {
  note: ICreateState['note'];
}

const Button: React.FC<IProps> = ({ note }) => {
  const navigate = useNavigate();

  const handlePublish = async (): Promise<any> => {
    // generate random string
    const id = Math.random().toString(36).slice(2, 9);
    const slug = note.title.toLowerCase().replace(/\s/g, '-') + '-' + id;
    const data = {
      ...note,
      content: note.content.replace(/\n/g, '<br />'),
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, 'notes', slug), data);
    navigate('/', { replace: true });
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
