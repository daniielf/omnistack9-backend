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
}, { 
  toJSON: {
    virtual: true
  }
 });

SpotSchema.virtual('foto_url').get(function() {
  return `http://localhost:3333/files/${this.foto}`;
});

module.exports = mongoose.model('Spot', SpotSchema);