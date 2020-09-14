const express = require('express');
const app = express()
const port = process.env.port || 5000;

app.use(express.static('public'));
app.listen(port, () => {
  console.log(`thefuse.band is listening on port ${port}...`);
});
