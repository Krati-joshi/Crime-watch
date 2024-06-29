const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
