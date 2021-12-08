const Multipliers = require('../models/multipliers.model');

exports.getAll = async (req, res) => {
  try {
    const multipliers = await Multipliers.find();

    // res.render('MultipliersPage', { title: 'Local Library Home', error: err, data: results });

    // res.send('NOT IMPLEMENTED: Author list');
    res.json({multipliers: multipliers});
    console.log('multipliersuuu', multipliers);


    // Multipliers.find((err, multipliers) => {
    //   if (err) return res.json({ success: false, error: err });
    //   return res.json({ success: true, data: multipliers });
    // });

  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const con = await Multipliers.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
    // const con = await Multipliers.find({'id': 'winterMultiplierss'});
    // res.json(con);

  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

// exports.postNew = async (req, res) => {
//   try {
//     const { day, genre, image, performer, price } = req.body;
//     const newMultipliers = new Multipliers({ day: day, genre: genre, image: image, performer: performer, price: price });
//     await newMultipliers.save();
//     res.json({ message: 'OK' });
//   } catch(err) {
//     res.status(500).json({ message: err });
//   }
// };

// exports.putId = async (req, res) => {
//   const { day, genre, image, performer, price } = req.body;
//   try {
//     const con = await(Multipliers.findById(req.params.id));
//     if(con) {
//       await Multipliers.updateOne({ _id: req.params.id }, { $set: { day: day, genre: genre, image: image, performer: performer, price: price }});
//       res.send(`changed ${con}`);
//     }
//     else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// };

// exports.deleteId = async (req, res) => {
//   try {
//     const con = await(Multipliers.findById(req.params.id));
//     if(con) {
//       await Multipliers.deleteOne({ _id: req.params.id });
//       res.send(`deleted ${con}`);
//     }
//     else res.status(404).json({ message: 'Not found...' });
//   }
//   catch(err) {
//     res.status(500).json({ message: err });
//   }
// };
