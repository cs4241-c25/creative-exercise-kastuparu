const express = require('express')

const port = process.env.PORT || 3000

const data = require('./us_population.json')

const app = express();
app.use(express.json());
app.use(express.static('public'))


app.use('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);
    next() // go to the next middleware for this route
})

app.get('/data', (req, res) => {
    return res.status(200).send(data[1])
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});