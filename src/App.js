import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Research from './components/research/research';
import About from './components/about/About';
import Error from './components/error404/Error';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='work' element={<Work />}>
            </Route>
            <Route path='research' element={<Research/>} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
