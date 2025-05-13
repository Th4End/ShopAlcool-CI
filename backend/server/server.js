import express, { json } from "express";
import cors from "cors";

const app = express();
app.disable("x-powered-by");
const PORT = 3000;
import routes from "../routes/routes.js";

const corsOptions = {
   origin: '*',
   methods: ["GET", "POST", "PUT", "DELETE"], 
   allowedHeaders: ["Content-Type", "Authorization"], 
   credentials: true 
};

app.use(cors(corsOptions));
app.use(json());
app.use(routes);

app.listen(PORT, () => {
   console.log(`🚀 Server API running at http://localhost:3000`);
});
