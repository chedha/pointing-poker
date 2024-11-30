const express = require('express');
const router = express.Router();

let rooms = [];

// Create a new room
router.post('/', (req, res) => {
    const room = { id: Date.now(), name: req.body.name, points: [] };
    rooms.push(room);
    res.status(201).json(room);
});

// Get all rooms
router.get('/', (req, res) => {
    res.json(rooms); // Send JSON array
});

// Get room details
router.get('/:id', (req, res) => {
    const room = rooms.find((r) => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).send('Room not found');
    res.json(room);
});

module.exports = router;
