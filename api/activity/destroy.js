const Activity = require('../../models').Activity,
  response = require('../response.js');

module.exports = (req, res) => {
  // TODO: deleting same more then once time not going to catch. catch IFF invalid id !!
  Activity.findByIdAndDelete(req.params.id)
    .then(result => {
      response.success(res)
    })
    .catch(err => {
      response.failure(res, [err])
    })
}