const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planTier: { type: String, enum: ['Free', 'Pro', 'Enterprise'], default: 'Free' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  paymentStatus: { type: String, enum: ['active', 'cancelled', 'past_due'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);