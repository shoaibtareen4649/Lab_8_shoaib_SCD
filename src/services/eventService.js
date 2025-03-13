// src/services/eventService.js

const Event = require('../models/eventModel');
const User = require('../models/userModel');

class EventService {
    async createEvent(eventData) {
        const event = new Event(eventData);
        return await event.save();
    }

    async getEventsByUser(userId) {
        return await Event.find({ user: userId }).sort({ date: 1 });
    }

    async getEventsByCategory(userId, category) {
        return await Event.find({ user: userId, category }).sort({ date: 1 });
    }

    async updateEvent(eventId, updateData) {
        return await Event.findByIdAndUpdate(eventId, updateData, { new: true });
    }

    async deleteEvent(eventId) {
        return await Event.findByIdAndDelete(eventId);
    }

    async getUpcomingEvents(userId) {
        const now = new Date();
        return await Event.find({ user: userId, date: { $gte: now } }).sort({ date: 1 });
    }
}

module.exports = new EventService();