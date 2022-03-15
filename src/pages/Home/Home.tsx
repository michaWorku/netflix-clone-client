import { FC } from 'react'
import './Home.scss'
import { Navbar, Footer, Featured, MovieList } from '../../components'

import { movieType } from "../../type";


const Home : FC<movieType> = ({movieType}) => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured movieType={movieType}/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <Footer />
    </div>
  )
}

export default Home