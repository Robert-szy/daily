const express = require('express');
const cors = require('cors');
const path = require('path');

const connectToDB = require('./db');

// const ordersRoutes = require('./routes/orders.routes');
const categoriesRoutes = require('./routes/categories.routes');
const potsRoutes = require('./routes/pots.routes');
const weightsRoutes = require('./routes/weights.routes');
const multipliersRoutes = require('./routes/multipliers.routes');


// start express server
const app = express();

// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/client/build')));

// add dailyProduction routes
// app.use('/api', ordersRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', potsRoutes);
app.use('/api', weightsRoutes);
app.use('/api', multipliersRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

// connect to DB
connectToDB();


const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
