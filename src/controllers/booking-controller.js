const Booking = require('../models/Booking');
const Usuario = require('../models/Usuario');
const Spot = require('../models/Spot');

module.exports = {
  async CREATE(req, res) {
    const { user, spot } = req.body;

    try {
      const userFind = await Usuario.findById(user);
      if (!userFind) return res.status(400).json({ok: false, error: 'Usuário Inválido' });
    } catch (e) {
      console.log('Booking Controller', 'CREATE', e);
      return res.status(400).json({ok: false, error: 'Usuário Inválido', __error: e});
    }

    try {
      const spotFind = await Spot.findById(spot);
      if (!spotFind) return res.status(400).json({ok: false, error: 'Spot Inválido' });
    } catch (e) {
      console.log('Booking Controller', 'CREATE', e);
      return res.status(400).json({ok: false, error: 'Spot Inválido', __error: e});
    }

    const booking = await Booking.create({ data: Date.now(), usuario: user, spot: spot });

    return res.json({ok: true, booking });
  }
};