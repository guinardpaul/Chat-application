const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://admin:admin@ds135574.mlab.com:35574/chat-app-mean';
  process.env.databaseName = 'production database: chat-app-mean';
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/chat-app-mean';
  process.env.databaseName = 'development database: chat-app-mean';
}
