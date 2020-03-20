import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port);
