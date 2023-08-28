const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hola estamos en el servidor!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))