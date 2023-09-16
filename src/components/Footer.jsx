import React from 'react';
import '../styles/Header.css';
import Facebook from './images/face.png';
import Insta from './images/insta.png';
import Twitter from './images/twitter.png';
import Youtube from './images/youtube.png';

const Footer = () => {
  return (
    <footer className='container mt-5 mb-5'>
      <div className='d-flex gap-5 justify-content-center'>
        <a href=''>
          <img src={Facebook} alt='facebook' />
        </a>
        <a href=''>
          <img src={Insta} alt='instagram' />
        </a>
        <a href=''>
          <img src={Twitter} alt='twitter' />
        </a>
        <a href=''>
          <img src={Youtube} alt='youtube' />
        </a>
      </div>
      <div className='d-flex gap-5 justify-content-center mt-3'>
        <p>Condition Of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className='d-flex justify-content-center '>
        &copy; MovieBox by Reginald Ejike
      </div>
    </footer>
  );
};

export default Footer;
