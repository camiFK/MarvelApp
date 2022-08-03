import React from 'react'
import Styles from './NavBar.module.scss'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container}>
        
          <NavLink to='/'>
           <img src={logo} height='40px' width='100px' alt='logo' />
          </NavLink>


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