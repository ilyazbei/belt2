var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = (function() {
  return{
    createBid: function(req, res) {
      // console.log(req.body, "this is it asdfasdf")
      var bid = new Bid( {
        amount: req.body.amount,
        product: req.body.product,
        _user: req.session.user.name
      });
      bid.save(function(err, data) {
        if(err) {
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },

    getBids: function(req, res) {
      Bid.find({}, function(err, bids) {
        if(err) {
          console.log(err)
        }else{
          res.json(bids)
        }
      })
    },

    endBid: function(req, res) {
      Bid.find({}, function(err, bids) {
        if(err) {
          console.log(err)
        }else{
          res.json(bids)
        }
      })
    },

    startBid: function(req, res ) {
      Bid.remove({}, function(err, bids) {
        if(err) {
          console.log(err)
        }else{
          res.json(bids)
        }
      })
    }
  }
})()
