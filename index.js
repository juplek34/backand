const express = require ('express')
const data = require('./data.json')
const app = express()
const port = 3000

function isTrue(value) {
    return value.includes('Senior Marketing')
}

const result = data.filter(isTrue)

console.log(result)

app.get('/', (req, res) => res.send(result))

app.listen(port, () => console.log('Example app listening on port ${port}!'))