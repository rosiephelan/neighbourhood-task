const express = require('express');
const bodyParser = require('body-parser');
const house = require('./routes/houses');
const neighbours = require('./routes/neighbours')

const port = process.env.PORT || 8080

const app = express();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use('/houses', house);

app.use('/neighbours', neighbours);

app.get('/', function(req, res) {
    res.send('OK');
})


