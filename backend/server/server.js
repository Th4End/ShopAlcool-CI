import express, { json } from "express";
import cors from "cors";

const app = express();
app.disable("x-powered-by");
const PORT = 3000;
import routes from "../routes/routes.js";

const allowedOrigins = process.env.NODE_ENV === "production"
  ? ["https://localhost:5173"]
  : ["http://localhost:3000"];

const corsOptions = {
   origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
         callback(null, true);
      } else {
         callback(new Error("Not allowed by CORS"));
      }
   },
   methods: ["GET", "POST", "PUT", "DELETE"], 
   allowedHeaders: ["Content-Type", "Authorization"], 
   credentials: true 
};

app.use(cors(corsOptions));
app.use(json());
app.use(routes);

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
});
