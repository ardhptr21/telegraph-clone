import Button from './components/Button';
import Form from './components/Form';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home note={note} setNote={setNote} />} />
          <Route path="/:slug" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
