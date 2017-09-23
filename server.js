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

const chat = require('./app/routes/chat');
const user = require('./app/routes/user');

mongoose.Promise = global.Promise;
// mongoDB connection
mongoose.connect(db, { useMongoClient: true, })
    .then((db) => {
        console.log('Successfully connected to mlab database: ' + db.name);
    })
    .catch((err) => {
        console.log(err);
    });

// MIDDLEWARE
// log into console (dev)
app.use(logger('dev'));
// Favicon
app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));
// Allows cross origin in development only
app.use(cors({ origin: 'http://localhost:4200' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));
// Refresh page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

// Routes
app.use('/api', chat);
app.use('/api', user);

// socket.io
io.on('connection', (socket) => {
    //console.log('User connected');

    socket.on('disconnect', (user) => {
        console.log(user.nickname + ' disconnected !')
        io.emit('remove-user', user);
    });

    socket.on('send-message', (data) => {
        console.log(data);
        io.emit('new-message', { nickname: data.nickname, message: data.message, date: data.date });
    });

    socket.on('login', (user) => {
        console.log(user.nickname + ' logged In !');
        io.emit('add-user', user);
    });
});

server.listen(port, () => {
    console.log('App listening on port ' + port);
});