// Imports
const express = require("express");
const cors = require("cors");
const gameRoutes = require("./src/routes/gameRoutes");

// Inicializacion de la aplicacion y el puerto a usar de pruebas
const app = express();
const PORT = 3001;

// Configuracion
app.use(cors()); // Permite peticiones desde React
app.use(express.json()); // Permite leer datos JSON enviados por React

app.use("/api", gameRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
