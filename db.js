const mongoose = require('mongoose');

const connectToDB = () => {

  // connect to DB
  mongoose.connect('mongodb://localhost:27017/dailyProductionDB', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connected to the database:' + db.name);
  });

  // on error
  db.on('error', (err) => console.log('Error ' + err));
};

module.exports = connectToDB;
