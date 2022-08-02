import React from 'react'
import Styles from './NavBar.module.scss'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container}>
        
        <div className={Styles.title}>
          <NavLink to='/'>
          <p className={Styles.title2}>Marvel App</p>
          </NavLink>
        </div>

        <div className={Styles.pages}>

          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/create'>Create</NavLink>
          <NavLink to='/about'>About</NavLink>
   
        </div>




      </div>
    </nav>
  )
}

export default NavBar