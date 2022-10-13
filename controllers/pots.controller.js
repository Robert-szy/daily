const Pot = require('../models/pot.model');

exports.getAll = async (req, res) => {
  try {
    const pots = await Pot.find();
    res.json({pots});
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const con = await Pot.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putId = async (req, res) => {
  try {
    console.log('value', req.body.potValue);
    const con = await Pot.updateOne({_id: req.params.id}, { $set: { potValue: req.body.potValue }});
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
