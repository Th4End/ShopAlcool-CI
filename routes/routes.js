const express = require('express');
const app = express.Router();
const jwtCheck = require('../Controller/Auth/Auth');
const client = require('../Donnée/Connexion_DB');

app.use(express.json());

app.get('/', function (req, res) {
    res.send({ message: 'Hello, world!' });
});
// app.use(jwtCheck);
// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

app.get('/alcool', function (req, res) {
    client.query('SELECT shop_item.id, alcohol_id, shop_id, price, name, image FROM shop_item INNER JOIN alcohol ON alcohol.id = shop_item.alcohol_id;')
        .then(result => {
            if (result.rows.length === 0) {
                console.log(rows);
                return res.status(404).send({ message: 'Aucun alcool trouvé' });
            } else {
                console.log(result.rows);
                return res.status(200).send(result.rows);
            }
        })
        .catch(err => {
            
            console.error('Erreur de la requête SQL:', err);
            res.status(500).send({ message: 'Erreur interne du serveur', error: err });
        });
});

app.get('/alcool/:id', function (req, res) {
    client.query('SELECT shop_item.id, alcohol_id, shop_id, price, type_alcohol_id, name, description, degree, capacity, image FROM shop_item INNER JOIN alcohol ON alcohol.id = shop_item.alcohol_id WHERE shop_item.alcohol_id = $1;', [req.params.id])
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).send({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(200).send(result.rows[0]);
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).send({ message: 'Erreur interne du serveur', error: err });
        });
});

app.post('/alcool', function (req, res) {
    const { type_alcohol_id, name, description, degree, capacity, image } = req.body;
    client.query('INSERT INTO alcohol (type_alcohol_id, name, description, degree, capacity, image) VALUES ($1, $2, $3, $4, $5, $6)', [type_alcohol_id, name, description, degree, capacity, image])
        .then(result => {
            res.status(201).send(result.rows[0]);
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).send({ message: 'Erreur interne du serveur', error: err });
        });
});

app.patch('/alcool/:id', function (req, res) {
    const { type_alcohol_id, name, description, degree, capacity, image, id } = req.body;
    client.query('UPDATE alcohol SET type_alcohol_id = $1, name = $2, description = $3, degree = $4, capacity = $5, image = $6 WHERE id = $7', [type_alcohol_id, name, description, degree, capacity, image, id])
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).send({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(200).send(result.rows[0]);
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).send({ message: 'Erreur interne du serveur', error: err });
        });
});

app.delete('/alcool/:id', function (req, res) {
    client.query('DELETE FROM shop_item WHERE id = $1', [req.params.id])
        .then(result => {
            if (result.rowCount === 0) {
                return res.status(404).send({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(204).send({ message: 'Alcool supprimé' });
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).send({ message: 'Erreur interne du serveur', error: err });
        });
});

module.exports = app;