const mongoose = require('mongoose');

module.exports = {
  connectDb: () => {
      return mongoose.connect('mongodb://localhost:27017/ontheflyactivity', { useNewUrlParser: true, useUnifiedTopology: true });
    },
  Activity: require("./activity.js")
}