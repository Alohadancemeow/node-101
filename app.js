const express = require('express');
const app = express()

// # suggest JSON to express
app.use(express.json())

// # use all routes
app.use(require('./src/Routes/routes'))


// # PORT:
const port = 3000
app.listen(port, () => {
    console.log(`Listtening on port: ${port}`);
    console.log("Press Ctrl + C to quit.");
})