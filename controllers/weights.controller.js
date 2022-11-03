const Weight = require('../models/weight.model');

exports.getAll = async (req, res) => {
  try {
    const weights = await Weight.find();
    res.json({weights});
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const con = await Weight.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

// exports.getLayers = async (req, res) => {
//   try {
//     const con = await Weight.findOne({_id: req.params.id} );
//     if(!con) res.status(404).json({ message: 'Not found' });
//     else res.json(con);
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// };

exports.putId = async (req, res) => {
  try {
    const con = await Weight.updateOne({_id: req.params.id}, { $set: { weightValue: req.body.weightValue, weightLayers: req.body.weightLayers }});
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
