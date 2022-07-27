 import {DataTypes} from 'sequelize';
 import {sequelize} from '../database/database.js';

 export const Comic = sequelize.define('comics', {
     name: {
         type: DataTypes.STRING,
         allowNull: false,
     }
 })

