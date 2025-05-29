//importo express
const express = require('express');
//iniziallizzo express
const app = express();
//definisco la porta
const port = 3000;

//uso il middleware per gli asset statici
app.use(express.static('public'));


//uso il middleware per il body parser
app.use(express.json());

//deinisco l'entry point
app.get('/', (req, res) => {
  res.send('Moovie API server');
});

//dico al servere di ascoltare sulla porta definita
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});