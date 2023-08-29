const express = require('express');

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Estamos en el servidor usando express y Typescript');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`servidor is listening on ${port}`);
});