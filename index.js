const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8') );
});


app.listen(process.env.PORT || 8080, () => console.log('Listening on port: ' + process.env.PORT));