import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {getAllCharacters, getAllComics, getCharacterDetail} from '../../redux/actions.js'
import Styles from './Landing.module.scss'

const Landing = () => {

  const dispatch = useDispatch();
  // const reducerCharacters = useSelector(state => state.character.characters);
  // console.log(reducerCharacters)
  
  useEffect(() => {
    dispatch(getAllCharacters());
    dispatch(getAllComics());
    dispatch(getCharacterDetail(1011031));
  }, [dispatch]);

  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>Marvel App</h1>
    </div>
  )
}

export default Landing