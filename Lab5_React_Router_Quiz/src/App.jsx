import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import Quiz from './pages/Quiz.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
