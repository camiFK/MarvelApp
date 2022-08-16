import Sequelize from 'sequelize'
import 'dotenv/config'

export const sequelize = new Sequelize(
  'marvel',
  process.env.USER,
  process.env.PASSWORD, 
  {
  host: 'localhost',
  dialect: 'postgres',
}
);
