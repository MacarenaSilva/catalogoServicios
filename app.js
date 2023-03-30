const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Buenas tardes, estoy probando CI, aaaaaaaaaaaaaaaaaa');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});