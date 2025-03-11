const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;
const routes = require('../routes/routes');
app.use(cors());
app.use(routes);
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
   console.log(`🚀 Server running at http://localhost:${PORT}`);
});
