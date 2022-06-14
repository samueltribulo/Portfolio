import React from 'react'
import './index.scss'
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Project } from './routes/Project';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
