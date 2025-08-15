// notice.model.js
const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  noticeId: { type: String, required: true, unique: true }, // original Noticeid
  header:   { type: String, required: true },               // Noticeheader
  body:     { type: String, required: true },               // Noticebody
  date:     { type: Date,   required: true, default: Date.now }, // Date
  place:    { type: String },                               // Place
  forWhom:  { type: String },                               // For (target/audience)
  by:       { type: String, required: true }                // By (creator/issuer)
}, {
  timestamps: true
});

module.exports = mongoose.model('Notice', NoticeSchema);
