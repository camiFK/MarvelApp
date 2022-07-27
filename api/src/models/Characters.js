import {DataTypes, UUID} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Comic} from './Comics.js'

export const Character = sequelize.define('character', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://media.revistavanityfair.es/photos/60e82e4efc86fee32f97bf69/master/w_1600%2Cc_limit/239224.jpg" ,
    },
    createdDB: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    }
})

Character.belongsToMany(Comic, {through: 'CharComics'})
Comic.belongsToMany(Character, {through: 'CharComics'})