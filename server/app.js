import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
  if (error) {
    console.log('Server failed to start', error);
    return;
  }
  console.log('Server is running on port', PORT);
});
