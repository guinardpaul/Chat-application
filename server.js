const env = require('./env');
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const favicon = require('serve-favicon');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const db = 'mongodb://admin:admin@ds135574.mlab.com:35574/chat-app-mean';
const config = require('./config/database');

const chat = require('./app/routes/chat');
const user = require('./app/routes/user');
const room = require('./app/routes/room');

mongoose.Promise = global.Promise;
// mongoDB connection
mongoose.connect(db, { useMongoClient: true, })
    .then((db) => {
        console.log('Successfully connected to ' + db.name);
    })
    .catch((err) => {
        console.log(err);
    });

// MIDDLEWARE
// log into console (dev)
app.use(logger('dev'));
// Favicon
//app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
// Allows cross origin in development only
// Decomment for test
app.use(cors({ origin: 'https://chat-paulo.herokuapp.com/' }));
//app.use(cors({ origin: 'http://localhost:4200' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Static Folder
//app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'dist')));
// Refresh page
/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
}); */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

// Routes
app.use('/api', chat);
app.use('/api', user);
app.use('/api', room);

// socket.io
io.on('connection', (socket) => {
    //console.log('User connected');
    socket.on('login', (user) => {
        console.log(user.nickname + ' logged In !');
        console.log(user);
        io.emit('add-user', user);
    });

    socket.on('fermer-app', (user) => {
        console.log('déconnexion ' + user);
        // localStorage.removeItem('user');
        console.log('User disconnected !');
        io.emit('remove-user');
    });

    socket.on('send-message', (data) => {
        console.log(data);
        io.emit('new-message', data);
    });

});

server.listen(port, () => {
    console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});