import React from 'react';
import { Link} from 'react-router-dom';

import Searchbar from '../../components/Searchbar/Searchbar';
const Home = () => {
 return (
  <>
  <section class="banner">
  <div className='container'>
  <div class="header">
  <div className='logo'>
  <img src="/images/logo_latest.png" alt='logo'/>
   </div>
   
   <div className='links'>
   <Link to="/login">
   <button className='btns'>Login</button>
   </Link>
   <Link to="/Register">
   <button className='btns'>Register</button>
   </Link>
  </div>
  
  </div>

  <div className='body'>
   <h1>
   Unlimited movies, TV shows and more.
   </h1>
   <p>Watch anywhere. Cancel anytime.</p>
  </div>
  <Searchbar/>
  </div> 
  </section>
  <section className='banner2'>
  <div className='about'>
  <div className='content'>
   <h1>Enjoy on your TV</h1>
   <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
  </div>
  </div>

  </section>
  <section className='banner3'>
  <div className='abouts'>
  <div className='content2'></div>
 </div>
 </section>
  </>
 );
}

export default Home;
