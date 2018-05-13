const { JWT_KEY } = require('./env');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('express-jwt');
var socketio = require('socket.io');
const app = express();
var http = require('http')
var server = http.Server(app);
const port = process.env.PORT || 8000;
const db = require('./knex');



websocket.on('connection', (socket) => {
    socket.on('userJoined',(meetupId)=>onJoinedMeetup(meetupId,socket))
    socket.on('location', (location,userId) => onLocationReceived(location, socket,userId));
    
});


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




const authentication = require('./routes/authentication');
const participants = require('./routes/participants');
const meetups = require('./routes/meetups');
const users = require('./routes/users');

app.use(participants);
app.use(meetups);
app.use(users);
app.use(authentication);
app.all('*', (req, res, next) => res.sendStatus(404));



server.listen(port, () => {
    console.log(`Listening on port ${port} -----------`);
});

module.exports = app;