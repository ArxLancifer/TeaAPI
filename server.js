const { response } = require('express');
const express = require('express');
const cors = require('cors')
const res = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTime': 180,
        'caffeinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTime': 180,
        'caffeinated': false,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffeinated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLocaleLowerCase();
    if (tea[teaName]) {
        response.json(tea[teaName])
    } else response.json(tea.unknown)
})



app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})