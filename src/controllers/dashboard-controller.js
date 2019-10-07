const Spot = require('../models/Spot');

module.exports = {
  async GET_ALL(req, res) {
    const techArray = req.body.techs.split(',').map((elem) => elem.trim());
    const spots = await Spot.find({ techs: { $in: techArray} });
    return res.json({ok: true, spots });
  }
};