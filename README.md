# Event Planner App

## Overview
The Event Planner App is a Node.js application designed to help users create, manage, and receive reminders for their events. Users can categorize events, set reminders, and view upcoming events based on various criteria. The application includes user authentication to ensure that each user can manage their events independently.

## Features
- **Event Creation**: Users can create events with a name, description, date, and time.
- **Event Categorization**: Events can be assigned to different categories such as Meetings, Birthdays, and Appointments.
- **Reminder System**: Users can set reminders for their events and receive notifications before the event occurs.
- **View Events**: Users can view their upcoming events sorted by date, category, or reminder status.
- **User Authentication**: Basic user authentication is implemented to allow multiple users to manage their events independently.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- dotenv for environment variable management

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd event-planner-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DATABASE_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the application:
   ```
   npm start
   ```

## Usage
- Register a new user by sending a POST request to `/api/auth/register`.
- Log in with your credentials at `/api/auth/login`.
- Create an event by sending a POST request to `/api/events` with the event details.
- Set reminders for your events by sending a POST request to `/api/reminders`.
- View your upcoming events by sending a GET request to `/api/events/upcoming`.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.