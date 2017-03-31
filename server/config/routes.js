var user = require('./../controllers/users.js')
var bid = require('./../controllers/bids.js')

module.exports = function(app) {
  app.post('/login', function(req, res) {
    user.login(req, res);
  })
  app.get('/checkstatus', function(req, res) {
    user.checkStatus(req, res);
  })
  app.get('/logout', function(req, res) {
    user.logout(req, res);
  })
  app.post('/createBid', function(req, res) {
    // console.log(req.body, "thsi is req basdjfkl;asdkl;fjasdfkl;")
    bid.createBid(req, res);
  })
  app.get('/getBids', function(req, res) {
    bid.getBids(req, res)
  })
  app.get('/endBid', function(req, res) {
    bid.endBid(req, res)
  })
  app.post('/startBid', function(req, res) {
    bid.startBid(req, res)
  })
}
