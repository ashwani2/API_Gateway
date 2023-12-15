// main-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3005;

// Serve the frontend application
app.use(express.static('frontend'));

// Proxy middleware for '/api'
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:3002/', 
    pathRewrite: {'^/api': ''} 
}));
// Home route
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.listen(PORT, () => {
    console.log(`Main Server started at port ${PORT}`);
});
