const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;