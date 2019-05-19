// NPM dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// built in dependencies
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

const apiRouter = require('./server/index');
app.use('/api', apiRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port)

app.listen(port, () => {
    console.log('Server running on port: ' + port);
})