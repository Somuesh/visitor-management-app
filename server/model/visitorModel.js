const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  visitors_name: {
    type: String,
    required: true,
  },
  visitors_mobile: {
    type: String,
    required: true,
  },
  visitors_address: {
    type: String,
    required: true,
  },
  drinks_snacks: {
    type: String,
  },
  came_to_meet: {
    type: String,
    required: true,
  },
  reason_for_visit: {
    type: String,
    required: true,
  },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
