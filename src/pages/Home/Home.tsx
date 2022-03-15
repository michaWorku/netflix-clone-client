import { FC } from 'react'
import './Home.scss'
import { Navbar, Footer, Featured } from '../../components'
import List from '../../components/List/List'
import { movieType } from "../../type";


const Home : FC<movieType> = ({movieType}) => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured movieType={movieType}/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
      <Footer />
    </div>
  )
}

export default Home