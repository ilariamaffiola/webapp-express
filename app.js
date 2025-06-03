//importo express
const express = require('express');

//importo dotenv
const dotenv = require('dotenv');

//utilizziamo la variabile dotenv
dotenv.config();

//iniziallizzo express
const app = express();
//definisco la porta
const port = process.env.SERVER_PORT;

//importo cors
const cors = require('cors');

//uso cors
app.use(cors({origin: process.env.FE_APP}))

//importo il router
const movieRouter = require('./router/movieRouter');

//importo i middleware
const errorsHandler = require('./middlewares/errorsHandler');
const notFoundHandler = require('./middlewares/notFound');
const imagePathMiddleware = require('./middlewares/imagePath');

//uso il middleware per gli asset statici
app.use(express.static('public'));


//uso il middleware per il body parser
app.use(express.json());

//uso il middleware per le immagini
app.use(imagePathMiddleware);

//deinisco l'entry point
app.get('/', (req, res) => {
  res.send('Moovie API server');
});

app.use('/api/movies', movieRouter);

//utilizzo i middleware
app.use(errorsHandler);
app.use(notFoundHandler);


//dico al servere di ascoltare sulla porta definita
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});