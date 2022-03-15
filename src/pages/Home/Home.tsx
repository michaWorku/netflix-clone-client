import { FC } from 'react'
import './Home.scss'
import { Navbar } from '../../components'
import List from '../../components/List/List'


const Home : FC = () => {
  return (
    <div className='home'>
      <Navbar/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
      <List/>
      <List/><List/><List/><List/><List/><List/><List/><List/>
      <List/>
    </div>
  )
}

export default Home