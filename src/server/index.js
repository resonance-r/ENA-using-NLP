const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
// Require Express to run server and routes
const express = require('express')
// bodyparser dependacies
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
// Start up an instance of app
const app = express()
// Cors for cross origin allowance
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static('dist'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(__dirname)
// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Used API Key is ${process.env.API_KEY}`);
let userInput = {} //

app.get('/',  (req, res)=> {
    res.sendFile('dist/index.html')
})

app.get('/test',  (req, res)=> {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async (req, res)=> {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const usedapiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(usedapiURL)
    const appData = await response.json()
    console.log(appData)
    res.send(appData)
})

// Setup server 
const port =8081;
const server = app.listen(port, listening);
//callback function
function listening(){ 
    console.log(`server is running on localhost: ${port}`);
};
