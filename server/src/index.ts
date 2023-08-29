import express from 'express';
const app = express();

import indexRoutes from './routes/index';

app.use(indexRoutes);

const port = 3000;
app.get('/', (req, res) => {
  res.send('Estas es la página principal del servidor ArtTechStore');
});
app.listen(port, () => {
   console.log(`servidor is listening on ${port}`);
});