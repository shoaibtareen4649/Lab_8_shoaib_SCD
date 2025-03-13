const Reminder = require('../models/reminderModel');
const Event = require('../models/eventModel');
const User = require('../models/userModel');
const notificationService = require('../utils/notificationService');

class ReminderService {
    async createReminder(userId, eventId, reminderTime) {
        const reminder = new Reminder({
            user: userId,
            event: eventId,
            reminderTime: reminderTime
        });
        await reminder.save();
        return reminder;
    }

    async getRemindersForUser(userId) {
        return await Reminder.find({ user: userId }).populate('event');
    }

    async scheduleReminders() {
        const reminders = await Reminder.find().populate('event');
        reminders.forEach(reminder => {
            const timeToReminder = new Date(reminder.reminderTime) - new Date();
            if (timeToReminder > 0) {
                setTimeout(() => {
                    notificationService.sendNotification(reminder.user, `Reminder for event: ${reminder.event.name}`, reminder.event.description);
                }, timeToReminder);
            }
        });
    }

    async deleteReminder(reminderId) {
        return await Reminder.findByIdAndDelete(reminderId);
    }
}

module.exports = new ReminderService();