const { JWT_KEY } = require('./env');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('express-jwt');
const app = express();
var http = require('http')
var server = http.Server(app);
const port = process.env.PORT || 8000;
const db = require('./knex');

app.use(bodyParser.json());

app.use(
    jwt({
        secret: JWT_KEY,
        requestProperty: 'jwt.payload',
        credentialsRequired: false,
        audience: 'movie_site',
        issuer: 'movie_site'
    })
);

app.use((req, res, next) => {
    let authUserId = req.jwt ? req.jwt.payload.sub : undefined;
    req.authenticatedUserId =
        Number.isFinite(authUserId) && authUserId > 0 ? authUserId : null;
    next();
});
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});



const authentication = require('./routes/authentication');
const favorites = require('./routes/favorites');
const reviews = require('./routes/reviews');
const ratings = require('./routes/ratings');
const users = require('./routes/users');
const movieAPI = require('./routes/movieAPI')

app.use(movieAPI)
app.use(ratings);
app.use(favorites);
app.use(reviews);
app.use(users);
app.use(authentication);
app.all('*', (req, res, next) => res.sendStatus(404));



server.listen(port, () => {
    console.log(`Listening on port ${port} -----------`);
});

module.exports = app;