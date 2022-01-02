import Button from './components/Button';
import Form from './components/Form';
import { useState } from 'react';

export interface IState {
  note: {
    title: string;
    author: string;
    content: string;
  };
}

const App = () => {
  const [note, setNote] = useState<IState['note']>({
    title: '',
    author: '',
    content: '',
  });

  return (
    <main className="relative w-full h-screen max-w-4xl mx-auto">
      <Form note={note} setNote={setNote} />
      <Button note={note} />
    </main>
  );
};

export default App;
