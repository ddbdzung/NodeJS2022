require('dotenv').config()
const configs = require('./src/configs/config')
const express = require('express')
const app = express()
const route = require('./src/routes')
const mongoDB = require('./src/configs/database');
const path = require('path')

// Configure request object in HTTP method
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// ------------------------------

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/', route)

// Connect to mongoDB
mongoDB.connect();
// --------------------------------

const port = configs.port || 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Open at http://127.0.0.1:${port}`)
})