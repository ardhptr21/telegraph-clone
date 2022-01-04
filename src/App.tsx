import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Note from './pages/Note';

const App = () => {
  return (
    <main className="relative w-full h-screen max-w-4xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:slug" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
