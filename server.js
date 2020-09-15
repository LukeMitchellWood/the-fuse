const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

app.use(helmet());
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'api entry point...' });
});
