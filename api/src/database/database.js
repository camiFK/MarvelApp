import Sequelize from 'sequelize'
import 'dotenv/config'
const { DATABASE_URL } = process.env

export const sequelize = new Sequelize(DATABASE_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: "postgres",
  dialectOptions: {
    ssl : {
      require: true,
      rejectUnauthorized: false
    }
  }
});
