const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  deptId: {
    type: String,
    required: true,
    unique: true,
    
  },
  deptName: {
    type: String,
    required: true,
    
  },
  deptHead: {
    type: String,
    required: true,
    
  },
  deptEstablished: {
    type: Date,
    required: true,
    default: Date.now
  },
  staffRoom: {
    type: String,
    trim: true
  },
  logo: {
    type: String,
    trim: true
  },
  deptContact: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+?[0-9\s\-]{7,15}$/, 'Please enter a valid contact number']
  },
  deptEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  deptWebsite: {
    type: String,
    required: true,
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid website URL']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Department', DepartmentSchema);
