 import {DataTypes} from 'sequelize';
 import {sequelize} from '../database/database.js';

 export const Comic = sequelize.define('comics', {
     available: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
     },
     name: {
         type: DataTypes.STRING,
         allowNull: false,
     }
 })

