const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static('client/dist'));
// app.use(express.static(path.join(__dirname, '../client', 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// app.get('/bundle.js', (req, res) => {
//   res.sendFile('bundle.js');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));