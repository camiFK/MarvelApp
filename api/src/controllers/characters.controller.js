import axios from 'axios'
//import {Characters, Comics} from '../models'

export const getApiCharacters = async () => {
  try {
    let response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d4a743cdb10f022dbc5f5f4cb22040c&hash=8dec0b1007c4c461bdec676eb458aeeb')
    console.log(response)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}