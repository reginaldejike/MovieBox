import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import Footer from './Footer';

const Header = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const movieFromServer = await fetchMovie();
      setMovie(movieFromServer);
    };
    getMovie();
  }, []);
  console.log(movie);
  const fetchMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated');
    const data = await res.json();
    return data;
  };

  return (
    <>
      <div className='hero'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <a href='' className='d-flex logo'>
              <img src='/images/tv.png' alt='Logo' />
              <h1>MovieBox</h1>
            </a>
            <form className='search'>
              <input
                type='text'
                placeholder='What do you want to search?'
                className='search-input'
              />
              <button>
                <i class='fa fa-search'></i>
              </button>
            </form>
            <div className='navbar-header'>
              <button className='signin'>Sign in</button>
              <img src='/images/Menu.png' alt='Menu' />
            </div>
          </div>
        </nav>
        <section className='container'>
          <div className='description-box'>
            <h1>John Wick 3 : Parabellum</h1>
            <img src='/images/Rating.png' alt='Rating' />
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere
            </p>
            <button className='trailer'>
              <img src='/images/Play.png' alt='play' /> Watch Trailer
            </button>
          </div>
        </section>
      </div>
      <div className='container mt-5 featureMovie'>
        <div className='featured'>
          <h1>Featured Movie</h1>
          <a href='' className='see-more'>
            See more <img src='/images/Chevron right.png' alt=' right' />
          </a>
        </div>
        <div
          className='card mt-5'
          style={{ width: '250px', height: '370px', borderRadius: '6px' }}
        >
          <img src='/images/Poster1.png' className='card-img-top' alt='card' />
          <div className='card-body'>
            <p className='mt-3 country'>USA, 2016-Current</p>
            <h5 className='card-title'>Stranger Things</h5>
            <div className='d-flex gap-4'>
              <div className='d-flex'>
                <img
                  src='/images/imdb.png'
                  width='30px'
                  height='20px'
                  alt='imdb'
                />
                <p>86.0/100</p>
              </div>
              <div className='d-flex'>
                <img
                  src='/images/tomato.png'
                  width='15px'
                  height='15px'
                  alt='tomato'
                />
                <p>97%</p>
              </div>
            </div>
            <p className='card-text'> action, adventure series</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Header;
