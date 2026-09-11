PTIT Event Hub

A full-stack event discovery and registration platform built for PTIT students.

A small project focused on solving a real student problem: discovering and registering for technical events in one place.

Live Demo

https://ptit-event-hub.vercel.app/

Features
Browse upcoming PTIT events
Search events by title and description
Filter events by category
View detailed event information
Register for events
Prevent duplicate registrations
Responsive design for desktop and mobile
Custom loading and not-found states
Tech Stack
Next.js — React framework and routing
React — UI development
TypeScript — Type safety
Tailwind CSS — Styling and responsive UI
Supabase — Backend and database
PostgreSQL — Relational data storage
Vercel — Deployment
Architecture
                    ┌─────────────────┐
                    │     Next.js     │
                    │    React + TS   │
                    └────────┬────────┘
                             │
                             │ Supabase Client
                             ▼
                    ┌─────────────────┐
                    │     Supabase    │
                    │    PostgreSQL   │
                    └────────┬────────┘
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
               events              registrations

Database
Events

Stores information about available events.

id
title
description
category
location
event_date
image_url
created_at

Registrations

Stores student registrations.

id
event_id
full_name
email
phone
created_at


The registrations table uses:

Row Level Security (RLS)
Insert policy for event registration
Unique constraint on (event_id, email) to prevent duplicate registrations
Main User Flow
Homepage
   ↓
Search / Filter Events
   ↓
Select Event
   ↓
Event Detail
   ↓
Registration Form
   ↓
Supabase
   ↓
Registration Saved

Getting Started

Clone the repository and install dependencies:

npm install


Create .env.local:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


Run the development server:

npm run dev


Open:

http://localhost:3000

What I Learned

Through this project, I learned how to build a small full-stack application from scratch.

Some of the main things I practiced:

Building dynamic routes with Next.js
Creating reusable React components
Connecting a frontend application to Supabase
Designing relational database tables
Understanding Row Level Security
Handling database errors
Preventing duplicate records with database constraints
Deploying a Next.js application to Vercel
Using Git and GitHub throughout the development process
Future Improvements

Possible improvements for future versions:

Student authentication
Admin dashboard for creating and managing events
Event capacity management
Email confirmation after registration
QR code check-in
Event registration history
Better accessibility support
Author

Built as a learning and portfolio project by a PTIT student.

⭐ If you find this project useful, feel free to explore the code and try the live demo.

