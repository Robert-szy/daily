const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({orders});
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const con = await Order.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

// exports.getLayers = async (req, res) => {
//   try {
//     const con = await Order.findOne({_id: req.params.id} );
//     if(!con) res.status(404).json({ message: 'Not found' });
//     else res.json(con);
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// };

// exports.putId = async (req, res) => {
//   try {
//     const con = await Order.updateOne({_id: req.params.id}, { $set: { orderValue: req.body.orderValue, orderLayers: req.body.orderLayers }});
//     if(!con) res.status(404).json({ message: 'Not found' });
//     else res.json(con);
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// };
