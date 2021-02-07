const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a Title'],
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    url: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
      ]
    },
    date: {
      type: Date,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date
    },
    description: {
      type: String,
      maxlength: [500, 'Description can not be more than 500 characters']
    },
    speaker: [
      {
        name: String,
        about: String,
        photo: String
      }
    ],
    moderator: [
      {
        name: String,
        about: String,
        photo: String
      }
    ],
    resources: {
      type: String
    },
    joiningInfo: {
      type: String
    },
    organiser: [{
      type: String
    }],
    tags: [{
      type: String
    }]
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Event', eventSchema);