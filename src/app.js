// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const vehiculosRoutes = require('./routes/vehiculos');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/vehiculos', vehiculosRoutes);


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error de conexión a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

