import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='links'>
        {/* tow different links for menues */}
        <Link to="/menuItemOne" className='menuItemOne'>Menu Item one</Link>
        <Link to="/menuItemTwo" className='menuItemTwo'>Menu Item Two</Link>
      </div>
        <Outlet/>
    </div>
  )
}

export default Home