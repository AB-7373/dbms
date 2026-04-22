const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reported_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  asset_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'reviewed', 'dismissed'], default: 'pending' },
  adminNotes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);