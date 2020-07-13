const Activity = require('../../models').Activity,
  respone = require('../response');

module.exports = (req, res) => {
  Activity.findById(req.params.id)
    .then(function(result){
      respone.success(res, [{ activity: result }])
    })
    .catch(function(err){
      respone.failure(res)
    })
}