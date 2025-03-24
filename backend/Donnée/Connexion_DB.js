import dotenv from 'dotenv';
const { Client } = require('pg');
dotenv.config();

const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.CA
  }
});

client.connect()
  .then(() => {
    console.log('Connecté à la base de données');
  })
  .catch(err => {
    console.error('Erreur de connexion:', err);
  })
export default client;