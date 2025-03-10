const pool = require("../server/server");

// 🔹 Création de l'utilisateur
const createUser = async (name, email, password) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password]
  );
  return result.rows[0];
};

// 🔹 Récupération de tous les utilisateurs
const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

// 🔹 Récupération d'un utilisateur par ID
const getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

// 🔹 Mise à jour d'un utilisateur
const updateUser = async (id, name, email, password) => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
    [name, email, password, id]
  );
  return result.rows[0];
};

// 🔹 Suppression d'un utilisateur
const deleteUser = async (id) => {
  const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
