// routes/vehiculos.js
const express = require('express');
const router = express.Router();
const Vehiculo = require('../models/Vehiculo');

// Crear un nuevo vehículo
router.post('/', async (req, res) => {
  try {
    const vehiculo = new Vehiculo(req.body);
    const nuevoVehiculo = await vehiculo.save();
    res.status(201).json(nuevoVehiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los vehículos
router.get('/', async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un vehículo por su matrícula
router.get('/:matricula', async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findOne({ matricula: req.params.matricula });
    if (!vehiculo) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.status(200).json(vehiculo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un vehículo por su matrícula
router.put('/:matricula', async (req, res) => {
  try {
    const vehiculoActualizado = await Vehiculo.findOneAndUpdate(
      { matricula: req.params.matricula },
      req.body,
      { new: true, runValidators: true }
    );
    if (!vehiculoActualizado) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.status(200).json(vehiculoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un vehículo por su matrícula
router.delete('/:matricula', async (req, res) => {
  try {
    const vehiculoEliminado = await Vehiculo.findOneAndDelete({ matricula: req.params.matricula });
    if (!vehiculoEliminado) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.status(200).json({ message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
