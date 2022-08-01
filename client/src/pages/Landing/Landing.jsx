import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {getAllCharacters, getAllComics, getCharacterDetail} from '../../redux/actions.js'

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
    <div>In process</div>
  )
}

export default Landing