const express = require('express');
const cors = require('cors');
const app = express();

const getTime = () => Math.floor(Math.random() * 4 * 1000);

app.use(cors({ origin: '*' }));

app.use('/data.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ a: 1 })), getTime());
});

app.use('/data2.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ b: 2 })), getTime());
});

app.use('/data3.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ c: 3 })), getTime());
});

app.use('/data4.json', (req, res) => {
  setTimeout(() => res.end(JSON.stringify({ d: 4 })), getTime());
});

app.listen(8080, () => console.log('the app is running at http://localhost:8080'));