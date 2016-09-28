console.log('hi')

import io from 'socket.io-client';

const socket = io();

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
