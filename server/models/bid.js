var mongoose = require('mongoose');
var BidSchema = new mongoose.Schema( {
  amount: { type: Number, required: true, min: 1 },
  product: { type: Number, required: true },
  _user: { type: String, ref: 'User' }
})

mongoose.model('Bid', BidSchema);
