const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new event
router.post('/events', authMiddleware, eventController.createEvent);

// Update an existing event
router.put('/events/:id', authMiddleware, eventController.updateEvent);

// Delete an event
router.delete('/events/:id', authMiddleware, eventController.deleteEvent);

// Get all events for the authenticated user
router.get('/events', authMiddleware, eventController.getEvents);

module.exports = router;