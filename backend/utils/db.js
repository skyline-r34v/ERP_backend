// connector.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connector() {
  mongoose.set('strictQuery', false);

  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Test-ERP',
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });
}

module.exports = connector;