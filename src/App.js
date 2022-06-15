import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Homepage } from './pages/Homepage'
import { Notfoundpage } from "./pages/Notfoundpage"
import { Layout } from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='posts' element={<Blogpage />} />
            <Route path='about' element={<Aboutpage />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}


export default App;
