import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { db } from '../config/firebaseConfig';
import parseFirebaseTimestamp from '../utils/parseFirebaseTimestamp';

const Home = () => {
  const [notes, setNotes] = useState<
    Array<{
      id: string;
      title: string;
      author: string;
      date: string;
    }>
  >([]);

  useEffect(() => {
    getNotesData();
  }, []);

  const getNotesData = async (): Promise<any> => {
    const notesRef = collection(db, 'notes');
    const notesSnap = await getDocs(notesRef);
    setNotes(
      notesSnap.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
        date: parseFirebaseTimestamp(doc.data().createdAt),
      }))
    );
  };

  return (
    <section>
      <Link
        to="/create"
        className="flex items-center justify-center px-2 py-3 mt-10 text-2xl text-white transition duration-150 bg-black border-2 rounded-lg bottom-28 right-28 hover:bg-slate-900"
      >
        Create Note
      </Link>
      <div className="grid grid-cols-2 gap-10 py-10">
        {notes.map((note) => (
          <Card key={note.id} title={note.title} date={note.date} author={note.author} slug={note.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
