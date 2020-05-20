const express = require('express');
const fs = require('fs');
// const events = require('events');
// const winston = require('winston');
// const bodyParser = require('body-parser');
// const compression = require('compression');

const app = express();

app.listen(3000, () => {
  console.log('Server works')
});

app.get('/', (req, res) => {
  res.send('')
});

fs.readFile('readme.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});