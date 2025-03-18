import dotenv from 'dotenv';
dotenv.config();
import { Router } from 'express';
import { hash, compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { query } from '../Donnée/Connexion_DB';

const router = Router();
const SECRET_KEY = process.env.SECRET_KEY || 'mon_secret';

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
        
        const user = result.rows[0]; 
        const isPasswordValid = await compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }
        
        const token = sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error); 
        res.status(500).json({ message: 'Erreur interne du serveur' });
    }
});

// 🔹 Connexion d'un utilisateur
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Récupérer l'utilisateur par email
    const user = await query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await compare(password, user.rows[0].password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = sign({ id: user.rows[0].id, email: user.rows[0].email }, SECRET_KEY, { expiresIn: "24h" });

    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Récupération du profil utilisateur (protégé)
router.get("/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token manquant ou invalide" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verify(token, SECRET_KEY);

    // Récupérer l'utilisateur depuis la BDD
    const result = await query("SELECT id, name, email FROM users WHERE id = $1", [decoded.id]);
    if (result.rows.length === 0) {  // ✅ Utilise `result.rows`
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    
    res.json(user.rows[0]);
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
});

export default router;
