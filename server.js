const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const favicon = require('serve-favicon');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const db = 'mongodb://admin:admin@ds135574.mlab.com:35574/chat-app-mean';

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
app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')))
// Allows cross origin in development only
app.use(cors({ origin: 'http://localhost:4200' }));
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log('listening on port ' + port);
});