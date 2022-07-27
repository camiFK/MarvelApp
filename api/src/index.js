import app from './app.js'
import {sequelize} from './database/database.js'


async function server() {
    try {
        await sequelize.sync({force: false}) // Syncronizes the database with the models
        app.listen(3000)
        console.log('Server running on port 3000')
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

server();
