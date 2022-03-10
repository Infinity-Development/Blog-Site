const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = () => {
  try {
    mongoose.connect(
      "mongodb://mongo:aNX8nhE6UV6f8CImP3fZ@containers-us-west-7.railway.app:5635",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => {
        console.log('Database connected successfully');
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDatabase;
