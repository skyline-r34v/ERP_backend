const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  wing: { type: String, required: true },
  floor: { type: Number, required: true },
  capacity: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Infrastructure', infrastructureSchema);