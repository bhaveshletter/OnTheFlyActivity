const Activity = require('../../models').Activity,
  response = require('../response');

module.exports = (req, res) => {
  from = parseInt(req.query.from || 0)
  limit = parseInt(req.query.limit || 10)

  Promise.all([Activity.find({}, null, { skip: from, limit: limit }), Activity.countDocuments()])
    .then(result => {
      response.success(res, [{ activities: result[0] }, { total: result[1], from: from, limit: limit }])
    })
    .catch(err => {
      response.failure(res)
    })
}