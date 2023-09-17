import React from 'react';
import Movie from './page/Movie';
import { Routes, Route } from 'react-router-dom';
import ViewDetails from './page/ViewDetails';
import ListMovie from './page/ListMovie';
import TvSesries from './page/TvSesries';
import Upcoming from './page/Upcoming';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/MovieBox' element={<Movie />} />
        <Route path='/movie/:movieid' element={<ViewDetails />} />
        <Route path='/movie' element={<ListMovie />} />
        <Route path='/tvseries' element={<TvSesries />} />
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>
    </>
  );
}

export default App;
