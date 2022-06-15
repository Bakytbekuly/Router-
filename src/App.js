import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Homepage } from './pages/Homepage'
import { Notfoundpage } from "./pages/Notfoundpage"
import { Layout } from "./components/Layout"
import { Singlepage } from './pages/Singlepage';
import { Createpage } from './pages/Createpage';
import { Editpage } from './pages/Editpage';
import { LoginPage } from './pages/Login/LoginPage';
import { RequireAuth } from "./HOC/RequireAuth"
import { AuthProvider } from './HOC/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AuthProvider>
          <Routes >
            <Route path='/' element={<Layout />}>

              <Route index element={<Homepage />} />
              <Route path='about' element={<Aboutpage />} />
              <Route path='about-us' element={<Navigate to="/about" replace />} />


              <Route path='posts' element={<Blogpage />} />
              <Route path='posts/:id' element={<Singlepage />} />
              <Route path='posts/:id/edit' element={<Editpage />} />
              <Route path='posts/new' element={
                <RequireAuth>
                  <Createpage />
                </RequireAuth>
              } />

              <Route path='login' element={<LoginPage />} />


              <Route path='*' element={<Notfoundpage />} />

            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>

  );
}


export default App;
