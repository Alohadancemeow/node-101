const express = require('express');
const app = express()
const cors = require('cors');

// # Allowed option
const corsOptions = {
    origin: ['http://example.com'],
    optionSuccessStatus: 200
}
// # Allow every websites to access
app.use(cors())
// app.use(cors(corsOptions))


// http://localhost:3000/image/image-1618560634527.png
app.use('/image', express.static('./images'))

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