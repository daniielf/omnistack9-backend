const Spot = require('../models/Spot');

module.exports = {
  async CREATE(req, res) {
    const { user_id } = req.headers;
    const { empresa, preco, techs } = req.body;
    const { filename } = req.file;

    const techArray = techs.split(',').map((elem) => elem.trim());
    console.log(user_id);

    // // FIND OR CREATE
    const spot = await Spot.create({ usuario: user_id, foto: filename, empresa, preco, techs: techArray });
    if (!spot) {
      return res.status(400).json({ error: 'Não foi possível realizar a operação' });
    }
    return res.json({ok: true});
  },  

  async GET_ONE(req, res) {
    const spot_id = req.params.id;
    var spot;
    try {
      spot = await Spot.findById(spot_id);
      if (!spot) {
        return res.status(400).json({ ok: false, error: 'Não foi possível encontrar esse Spot' });   
      };
      return res.json(spot);
    } catch (e) {
      console.log('SpotController', 'Get_One', e);
      return res.status(400).json({ ok: false, error: 'Não foi possível encontrar esse Spot' });   
    }
  }
};