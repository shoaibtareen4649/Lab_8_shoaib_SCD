const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    reminderTime: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;