const { Client } = require('pg');
console.log(process.env.USER);
console.log(process.env.DATABASE);
const client = new Client({
  host: process.env.HOST,
  port: 5432,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DATABASE,
});



client.connect()
  .then(() => {
    console.log('Connecté à la base de données');
  })
  .catch(err => {
    console.error('Erreur de connexion:', err);
  })
module.exports = client;