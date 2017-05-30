const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use('/dist/bootstrap', express.static(path.join(
    __dirname,
    '..',
    '..',
    'node_modules',
    'bootstrap',
    'dist'
)));

app.use('/dist', express.static(path.join(
    __dirname,
    '..',
    '..',
    'dist'
)));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.listen(8080, () => {
    console.log('Knoodle is running on http://localhost:8080');
});
