const express = require('express');
// const cors = require('cors');
const path = require('path');
// const mongoose = require('mongoose');
// const formidable = require('express-formidable');
// const uniqid = require('uniqid');
const connectToDB = require('./db');

const ordersRoutes = require('./routes/orders.routes');
const potsRoutes = require('./routes/pots.routes');
const portionsRoutes = require('./routes/weights.routes');
const multiplierRoutes = require('./routes/multiplier.routes');


// start express server
const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to DB
connectToDB();

// add middleware
// app.use(cors());
// app.use(formidable({ uploadDir: './public/uploads/' }, [{
//   event: 'fileBegin', // on every file upload...
//     action: (req, res, next, name, file) => {
//       const fileName = uniqid() + '.' + file.name.split('.')[1];
//       file.path = __dirname + '/public/uploads/photo_' + fileName; // ...move the file to public/uploads with unique name
//     }
//   },
// ]));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));

// add dailyProduction routes
app.use('/api', ordersRoutes);
app.use('/api', potsRoutes);
app.use('/api', portionsRoutes);
app.use('/api', multiplierRoutes);



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

module.exports = server;
