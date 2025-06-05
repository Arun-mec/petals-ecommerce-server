const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err))
}

module.exports = connectdb;