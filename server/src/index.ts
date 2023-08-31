import express from 'express';
const sequelize = require('./config/db.js')
import indexRoutes from './routes/index';


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Rutas
app.use(indexRoutes);

// puerto
const port = 3000;

// Sincronizar base de datos
sequelize.sync({ force: true});


// Ruta principal
app.get('/', (req, res) => {
    res.send('Estas es la página principal del servidor ArtTechStore');
});


app.listen(port, () => {
    console.log(`servidor is listening on ${port}`);
});