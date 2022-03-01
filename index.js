const express = require('express')
const app = express()
const route = require('./route')

// Configure request object in HTTP method
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// ------------------------------

app.use('/', route)

app.listen(5000, () => {
    console.log('Server is running on port 5000. Open at http://127.0.0.1:5000')
})