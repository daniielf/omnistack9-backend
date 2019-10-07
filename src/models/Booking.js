const mongoose = require('mongoose');
const BookingSchema = mongoose.Schema({
  data: String,
  approved: Boolean,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);