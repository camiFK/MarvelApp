import axios from 'axios'
import { Comic } from '../../models/Comics.js'

export const getComics = async (req, res) => {
    try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=7d4a743cdb10f022dbc5f5f4cb22040c&hash=8dec0b1007c4c461bdec676eb458aeeb&limit=60')
        
        const apiComics = response.data.data.results.map(comic => comic.title)

        apiComics.forEach(comic => {
           Comic.findOrCreate({
             where: {
                name: comic,   
             }
           })
        })

        const allApiComis = await Comic.findAll() 
        res.status(200).send(allApiComis)

    } catch (error) {
        console.log(error)
    }
}