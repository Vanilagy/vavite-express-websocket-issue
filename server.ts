import express from 'express';
import expressWs from 'express-ws';
import httpDevServer from 'vavite/http-dev-server';

const appBase = express();
const { app } = expressWs(appBase);

app.get('/test', (req, res) => {
  res.status(200).send('This endpoint works.');
});

app.ws('/ws', (socket) => {
  console.log('Socket connected to server!');
});

httpDevServer!.on('request', app);
console.log('User server started.');
