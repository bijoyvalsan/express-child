const express = require('express');
const helmet = require('helmet')
var path = require('path');

const app = express();

app.use(helmet({
    frameguard: false,
}));

const port = process.env.PORT || 8090;

app.get('/', (req, res) => {
    delete req.headers['X-Frame-Options'];
    res.cookie('testBB', 'abcdf', { maxAge: 900000, httpOnly: true });
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));