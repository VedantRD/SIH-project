const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI

// Middlewares
app.use(express.json())

// Connecting MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'))
  .catch(err => console.log(err))


// Importing Models
require('./models/user')

// Importing Routes
app.use(require('./routes/auth'))

// Starting Server
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});