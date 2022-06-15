import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Homepage } from './pages/Homepage'
import { Notfoundpage } from "./pages/Notfoundpage"
import { Layout } from "./components/Layout"
import { Singlepage } from './pages/Singlepage';
import { Createpage } from './pages/Createpage';
import { Editpage } from './pages/Editpage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='posts' element={<Blogpage />} />
            <Route path='posts/:id' element={<Singlepage />} />
            <Route path='posts/new' element={<Createpage />} />
            <Route path='posts/:id/edit' element={<Editpage />} />
            <Route path='about' element={<Aboutpage />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}


export default App;
