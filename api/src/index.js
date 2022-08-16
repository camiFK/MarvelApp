import app from './app.js'
import {sequelize} from './database/database.js'
const {PORT} = process.env


async function server() {
    try {
        await sequelize.sync({force: true}) // Syncronizes the database with the models
        app.listen(PORT)
        console.log(`Server running on port ${PORT}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

server();
