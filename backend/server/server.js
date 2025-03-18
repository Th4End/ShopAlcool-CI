import express, { json } from "express";
import cors from "cors";
const app = express();

const PORT = 3000;
import routes from '../routes/routes';
app.use(cors());
app.use(routes);
app.use(json());
app.use(cors());

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
});
