import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IState as ICreateState } from './Create';
import { db } from '../config/firebaseConfig';
import parseFirebaseTimestamp from '../utils/parseFirebaseTimestamp';

interface IState {
  note: ICreateState['note'];
  date: string;
}

const Note = () => {
  const params = useParams();
  const slug = params.slug!;

  const [note, setNote] = useState<IState['note']>({ author: '', content: '', title: '' });
  const [date, setDate] = useState<IState['date']>('');

  useEffect(() => {
    getNoteData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNoteData = async (): Promise<any> => {
    const noteRef = doc(db, 'notes', slug);
    const noteSnap = await getDoc(noteRef);

    if (noteSnap.exists()) {
      const note = noteSnap.data();
      setNote({
        title: note.title,
        author: note.author,
        content: note.content,
      });
      setDate(parseFirebaseTimestamp(note.createdAt));
    } else {
      window.location.href = '/';
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p className="mt-2 text-gray-400">
        {note.author} - {date}
      </p>
      <div className="mt-4 font-serif text-lg" dangerouslySetInnerHTML={{ __html: note.content }} />
    </section>
  );
};

export default Note;
