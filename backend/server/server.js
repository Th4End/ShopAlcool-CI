import express, { json } from "express";
import cors from "cors";

const app = express();
app.disable("x-powered-by");
const PORT = 3000;
import routes from "../routes/routes.js";

const corsOptions = {
   // origin: ["https://ton-site.com", "https://autre-site-autorisé.com"], // Restrict origins for better security
   methods: ["GET", "POST", "PUT", "DELETE"], 
   allowedHeaders: ["Content-Type", "Authorization"], 
   credentials: true 
};

app.use(cors(corsOptions)); // Ensure this does not expose sensitive data
app.use(json());
app.use(routes);

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
});
