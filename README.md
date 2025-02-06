NestJS BullMQ Task Queue with Bull-Board UI
This project demonstrates how to set up a task queue using BullMQ in a NestJS application with an integrated Bull-Board UI. Bull-Board provides a real-time UI for monitoring jobs in queues.

Features
NestJS-based task queue using BullMQ
Bull-Board UI for monitoring job statuses
Basic Authentication for securing the UI
Modular architecture for easy integration into other projects
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/nest-bullmq-task-queue.git
cd nest-bullmq-task-queue
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables in .env:

env
Copy
Edit
BULL_BOARD_USERNAME=your-username
BULL_BOARD_PASSWORD_HASH=your-hashed-password
Run the app:

bash
Copy
Edit
npm run start
Access the Bull-Board UI: Navigate to http://localhost:3011/queues and log in with your credentials.

Usage
Add jobs to the queue through the API by calling GET /?fail=true/false.
Monitor job progress on the Bull-Board UI at /queues.
License
MIT