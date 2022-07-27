import axios from 'axios'
//import {Characters, Comics} from '../models'

export const getApiCharacters = async (req, res) => {
  try {

    const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d4a743cdb10f022dbc5f5f4cb22040c&hash=8dec0b1007c4c461bdec676eb458aeeb&limit=60')
    
    const information = response.data.data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        description: character.description,
        image: character.thumbnail.path + '.' + character.thumbnail.extension,
        comics: character.comics.items.map(comic => comic.name)
      }
    })
 
    res.status(200).send(information)

  } catch (error) {
    console.log(error)
    res.send(error)
  }
}