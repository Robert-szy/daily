const Multiplier = require('../models/multiplier.model');

exports.getAll = async (req, res) => {
  try {
    const multipliers = await Multiplier.find();
    res.json({multipliers});
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const con = await Multiplier.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

