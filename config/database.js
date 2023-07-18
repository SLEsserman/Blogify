// const mongoose = require('mongoose');

// // Connect to the MongoDB database using the provided DATABASE_URL environment variable
// mongoose.connect(process.env.DATABASE_URL);

// // Shortcut to the mongoose.connection object
// const db = mongoose.connection;

// // Event listener for the 'connected' event, triggered when the connection to MongoDB is established
// db.on('connected', function() {
//   // Prints a message of successful connection- the database name, host, and port
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });


const mongoose = require('mongoose')
require('dotenv').config() // Add this line if you have not already

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db