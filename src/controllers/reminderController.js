const Reminder = require('../models/reminderModel');

exports.createReminder = async (req, res) => {
    try {
        const { eventId, reminderTime } = req.body;
        const newReminder = await Reminder.create({ eventId, reminderTime, user: req.user.id });
        res.status(201).json({ success: true, data: newReminder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateReminder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReminder = await Reminder.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedReminder) {
            return res.status(404).json({ success: false, message: 'Reminder not found' });
        }
        res.status(200).json({ success: true, data: updatedReminder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteReminder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReminder = await Reminder.findByIdAndDelete(id);
        if (!deletedReminder) {
            return res.status(404).json({ success: false, message: 'Reminder not found' });
        }
        res.status(200).json({ success: true, message: 'Reminder deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({ user: req.user.id }).sort({ reminderTime: 1 });
        res.status(200).json({ success: true, data: reminders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};