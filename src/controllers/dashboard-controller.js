const Spot = require('../models/Spot');

module.exports = {
  async SHOW(req, res) {
    const user_id = req.headers.user_id;
    const spots = await Spot.find({ usuario: user_id });
    return res.json({ok: true, size: spots.length, spots });
  }
};