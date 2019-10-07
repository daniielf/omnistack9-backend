const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
  foto: String,
  empresa: String,
  preco: Number,
  techs: [String],
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);