import axios from 'axios'
import {Character} from '../../models/Characters.js'
import { Comic } from '../../models/Comics.js'

export const getApiCharacters = async () => {
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
 
    return information

  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

export const getDbCharacters = async () => {
  try {

   return await Character.findAll({
      include: { 
        model: Comic,
        attributes: ['name'],
        through: {
          attributes: []
        }
       }
    })

  } catch (error) {
    console.log(error)
  }
}

export const getAllCharacters = async (req, res) => {
  try {
    const api = await getApiCharacters()
    const db = await getDbCharacters()
    const all = api.concat(db)

    res.status(200).send(all);
    
  } catch (error) {
    console.log(error)
  }
}