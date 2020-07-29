/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { endPoint } from './app/Router/endpoint';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//para poder coger la ruta de la carpeta htt://localhost:3001/img/nombrefoto.jpg
app.use('/img', express.static(__dirname + '/img', {
  maxAge: '12h'
}));

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');  //el * se cambiara y se pondra la url permitida
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const router = express.Router();

app.use('/api',router);

endPoint(router);

const port = process.env.port || 3333;

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}/api`));
server.on('error', console.error);
