const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new reminder
router.post('/reminders', authMiddleware, reminderController.createReminder);

// Update an existing reminder
router.put('/reminders/:id', authMiddleware, reminderController.updateReminder);

// Delete a reminder
router.delete('/reminders/:id', authMiddleware, reminderController.deleteReminder);

// Get all reminders for the authenticated user
router.get('/reminders', authMiddleware, reminderController.getReminders);

module.exports = router;