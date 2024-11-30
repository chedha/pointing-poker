const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/rooms');

console.log('Starting server...');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/rooms', roomRoutes);

// Serve static files from Angular build
app.use(express.static(path.join(__dirname, 'frontend', 'dist', 'frontend', 'browser')));

// Basic API route
app.get('/api', (req, res) => {
    res.send('Welcome to the Pointing Poker API');
});

// Catch-all route to serve Angular index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'frontend', 'browser', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
