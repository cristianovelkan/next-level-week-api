import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem users');
    
    response.json([
      '1',
      '2'
    ]);    
});

app.listen(3333);