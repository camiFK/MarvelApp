import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './Landing.module.scss'

const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className={Styles.ctn}>

    <button 
    className={Styles.btn}
    onClick={() => navigate('/home')}>

    </button>
    
    </div>
  )
}

export default Landing