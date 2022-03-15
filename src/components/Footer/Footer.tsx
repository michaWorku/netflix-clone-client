import { FC } from 'react';
import './Footer.scss'
import {
 
  IoLogoLinkedin as Linkedin,
  IoLogoTwitter as Twitter,
  IoLogoGithub as Github
} from 'react-icons/io5';

const Footer : FC =() =>{
  return (
    <footer className='footer'>
      <p>
        Made by{' '}
        <a href='https://github.com/ayushiee' className='icon' target='_blank' rel='noreferrer'>
          <b>Mikias Worku</b>
        </a>
      </p>
      <div>
        <a href='https://linkedin.com/in/ayushiee/' className='icon' target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://twitter.com/ayushieee' className='icon' target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/ayushiee' className='icon' target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </footer>
  );
}

export default Footer