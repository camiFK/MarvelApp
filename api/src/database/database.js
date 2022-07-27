import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'marvel',
    'postgres',
    'hausofgaga', 
    {
    host: 'localhost',
    dialect: 'postgres',
  }
);

// Character.belongsToMany(Comic, {through: 'CharComics'})
// Comic.belongsToMany(Character, {through: 'CharComics'})