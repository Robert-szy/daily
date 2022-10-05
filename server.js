const express = require('express');
const cors = require('cors');
const path = require('path');
// const mongoose = require('mongoose');
// const formidable = require('express-formidable');
// const uniqid = require('uniqid');
const connectToDB = require('./db');
// const db = require('./db');

// const ordersRoutes = require('./routes/orders.routes');
// const potsRoutes = require('./routes/pots.routes');
// const weightsRoutes = require('./routes/weights.routes');
const multipliersRoutes = require('./routes/multipliers.routes');


// start express server
const app = express();




// add middleware
app.use(cors());
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

// app.use((req, res, next) => {
//   req.db = connectToDB();
//   next();
// });



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/client/build')));

// add dailyProduction routes
// app.use('/api', ordersRoutes);
// app.use('/api', potsRoutes);
// app.use('/api', weightsRoutes);
app.use('/api', multipliersRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });


app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

// connect to DB
connectToDB();

// console.log(`Established access to db: ${connectToDB.db}`);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// });
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = server;
