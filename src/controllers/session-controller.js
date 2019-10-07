const Usuario = require('../models/Usuario');
module.exports = {
  async CREATE(req, res) {
    const { email } = req.body;
    // FIND OR CREATE
    let user = await Usuario.findOne({ email });
    if (!user){
      user = await Usuario.create({ email });
    }

    return res.json({ok: true, usuario: user._id });
  },

  async GET_ONE(req, res) {

  }
};