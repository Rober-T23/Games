const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admi';
const DB_NAME = process.env.DB_NAME || 'videogames';
const DB_PORT = process.env.DB_PORT || 5432
const API_KEY = process.env.API_KEY



module.exports = {
   API_KEY,
   DB_HOST,
   DB_USER,
   DB_PASSWORD,
   DB_NAME,
   DB_PORT
}