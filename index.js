require('dotenv').config();
const pool = require('./db/db'); 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kora backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});