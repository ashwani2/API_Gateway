// backend-server.js
const express = require('express');

const app = express();
const PORT = 3002;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Smith' },
];

// API route to get users
app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Backend Server started at port ${PORT}`);
});
