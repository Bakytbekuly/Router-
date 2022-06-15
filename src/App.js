import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Homepage } from './pages/Homepage'
import { Notfoundpage } from "./pages/Notfoundpage"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/about">About</Link>

        </header>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/posts' element={<Blogpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
