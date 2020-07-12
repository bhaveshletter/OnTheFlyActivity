const mongoose = require('mongoose');

 
const activitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    remind_at: {
      type: Date,
      default: null
    },
    deleted_at: {
      type: Date,
      default: null
    }
  },
  { timestamps: true },
);
 
const Activity = mongoose.model('Activity', activitySchema);

// export default Activity;
module.exports = Activity;