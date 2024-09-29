// models/Vehiculo.js
// models/Vehiculo.js
const mongoose = require('mongoose');

const VehiculoSchema = new mongoose.Schema({
  matricula: { type: String, required: true, unique: true }, // String
  marca: { type: String, required: true },                   // String
  modelo: { type: String, required: true },                  // String
  año: { type: Number, required: true },                     // Number
  kilometraje: { type: Number, required: true },             // Number
  tipoCombustible: { 
    type: String, 
    required: true, 
    enum: ['Gasolina', 'Diésel', 'Eléctrico', 'Híbrido'] 
  },                                                           // String con valores restringidos
  estadoDisponible: { type: Boolean, required: true, default: true }, // Boolean
  fechaIngreso: { type: Date, default: Date.now },          // Date
  características: { type: [String], default: [] },          // Array de Strings
  ubicacion: {                                               // Objeto Anidado
    latitud: { type: Number },
    longitud: { type: Number }
  },
  detallesAdicionales: { type: mongoose.Schema.Types.Mixed } // Mixed (Cualquier tipo)
}, {
  timestamps: true
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);

