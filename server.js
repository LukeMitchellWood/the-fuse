const express = require('express');

const app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ message: 'up and running...' });
});
