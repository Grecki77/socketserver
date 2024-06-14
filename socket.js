const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const localNetworkRegex = /^(http:\/\/)?(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?$/;


app.use(cors({
    origin: (origin, callback) => {
      if (localNetworkRegex.test(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }));

io.on('connection', (socket) => {
    console.log('New connection:', socket.id);
  
    socket.handshake.headers.origin = localNetworkRegex;

    socket.on('message', (data) => {
      console.log('Message:', data);
      io.emit('message', data);

    });
  });

  const args = process.argv.slice(2);
  const portArg = args.find(arg => arg.startsWith('--PORT='));
  const PORT = portArg ? parseInt(portArg.split('=')[1], 10) : 7200;
server.listen(PORT, () => {
  console.log(`Server listing on  ${PORT} - SOCKET.NUMERNABIS`);
});
