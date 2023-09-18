import { NavLink, Link, useParams } from 'react-router-dom';
import Tv from '../components/images/tv.png';
import Projector from '../components/images/Movie Projector.png';
import Tvshow from '../components/images/TV Show.png';
import Calender from '../components/images/Calendar.png';
import Home from '../components/images/Home.png';
import Logout from '../components/images/Logout.png';
import backdrop from '../components/images/Rectangle 29.png';
import '../styles/ViewDetails.css';
import useFetch from '../components/useFetch';
import { useEffect, useState, useRef } from 'react';

const api_key = process.env.REACT_APP_API_KEY;

const ViewDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);
  // const { movie: movies } = useFetch();
  // const movies = movie.find((m) => (m.id = movieid));
  // let movieid = id.toString();

  useEffect(() => {
    isMounted.current = true;
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
        );
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setMovie(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, [id]);

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
  //     .then((reponse) => reponse.json())
  //     .then((data) => setMovie(data));
  // }, [id]);

  // const releaseDate = movie.release_date.split('-');
  // const year = parseInt(releaseDate[0]);
  // const month = parseInt(releaseDate[1]);
  // const day = parseInt(releaseDate[2]);

  // const utcDate = new Date(Date.UTC(year, month, day));
  // const utcDateString = utcDate.toString();
  // let now = Date.UTC(date);

  if (loading) return <h1> Is Loading ....</h1>;
  if (error) throw error;

  return (
    <>
      <div className='d-flex'>
        <div className='sidebar'>
          <div className='container'>
            <Link to='/' className='logo'>
              <img src={Tv} alt='Logo' />
              MovieBox
            </Link>
            <NavLink to={'/'} className='link'>
              <img src={Home} alt='' />
              Home
            </NavLink>
            <NavLink to={'/Movie'} className='link'>
              <img src={Projector} alt='' /> Movies
            </NavLink>
            <NavLink to={'/tvseries'} className='link'>
              <img src={Tvshow} alt='' /> TvSeries
            </NavLink>
            <NavLink to={'/upcoming'} className='link'>
              <img src={Calender} alt='' /> Upcoming
            </NavLink>
            <div className='quiz'>
              <p className='play'>Play movie quizes and earn free tickets </p>
              <p className='game'>50k people are playing now</p>
              <button className='btn btn-danger m-auto'>start playing</button>
            </div>
            <NavLink className='link mt-4'>
              <img src={Logout} alt='logout' /> Log out
            </NavLink>
          </div>
        </div>
        <main>
          <div className='container'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              className='backdrop'
              alt=''
            />
            <h1 data-testid='movie-title'>{movie.title}</h1>

            <div className=''>
              <span data-testid='movie-release-date'>
                {new Date(movie.release_date).toUTCString()}
              </span>
              <p data-testid='movie-overview'>{movie.overview}</p>
              {typeof movie.runtime === 'number' ? (
                <span data-testid='movie-runtime'>
                  {<span>{Math.floor(movie.runtime / 60)}</span>}h{' '}
                  <span>{movie.runtime % 60}</span>m
                </span>
              ) : (
                'N/A'
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ViewDetails;
