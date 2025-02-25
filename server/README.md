# TaxVerse UAE Server

This is the backend server for TaxVerse UAE, an AI-powered tax compliance platform for the UAE.

## Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables in a `.env` file
3. Run the server: `npm start`

## API Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user
- GET /api/tax/data - Get tax data (protected route)
- POST /api/tax/transaction - Add a new transaction (protected route)

## Environment Variables

- PORT - The port number for the server
- MONGO_URI - MongoDB connection string
- JWT_SECRET - Secret key for JWT

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon for development

