import Sequelize from 'sequelize'
import {Comics} from '../models/Comics.js'
import {Character} from '../models/Characters.js'


export const sequelize = new Sequelize('marvel', 'postgres', 'hausofgaga', {
    host: 'localhost',
    dialect: 'postgres',
})

// Character.belongsToMany(Comic, {through: 'CharComics'})
// Comic.belongsToMany(Character, {through: 'CharComics'})