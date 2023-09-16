import React from 'react';
import Movie from './page/Movie';
import { Routes, Route } from 'react-router-dom';
import ViewDetails from './page/ViewDetails';
import ListMovie from './page/ListMovie';
import TvSesries from './page/TvSesries';
import Upcoming from './page/Upcoming';

function App() {
  // const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   const getMovie = async () => {
  //     const movieFromServer = await fetchMovie();
  //     setMovie(movieFromServer);
  //   };
  //   getMovie();
  // }, []);
  // console.log(movie);
  // const fetchMovie = async () => {
  //   const res = await fetch(
  //     'https://api.themoviedb.org/3/movie/top_rated?api_key=dc49f98101ca64a4660533265f036686'
  //   );
  //   const data = await res.json();
  //   return data.results;
  // };
  return (
    <>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/movie/:id' element={<ViewDetails />} />
        <Route path='/movie' element={<ListMovie />} />
        <Route path='/tvseries' element={<TvSesries />} />
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>
    </>
  );
}

export default App;
