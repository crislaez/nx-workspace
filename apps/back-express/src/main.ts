/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 // import * as express from 'express';

// const app = express();

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to back-express!' });
// });

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

 const express = require('express');
 const port = process.env.port || 3333;
 const endpoint = require('./app/Router/endpoint');

 const app = express();
 app.use(express.urlencode({extended:false}));
 app.use(express.json());

 const router = express.Router();

 app.use('/api', router);

 endpoint(router);

 app.listen(port, () => console.log(`Api Rest corriendo en: ${port}`))


