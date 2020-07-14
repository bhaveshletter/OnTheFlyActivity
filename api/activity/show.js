const Activity = require('../../models').Activity,
  response = require('../response');

module.exports = (req, res) => {
  Activity.findById(req.params.id)
    .then(function(result){
      response.success(res, [{ activity: result }])
    })
    .catch(function(err){
      response.failure(res)
    })
}