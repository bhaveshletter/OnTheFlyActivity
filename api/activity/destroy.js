const Activity = require('../../models').Activity,
  response = require('../response.js');

module.exports = (req, res) => {
  // NOTE: deleting same more then once time not going to catch. catch IFF invalid id !!
  Activity.findByIdAndDelete(req.params.id)
    .then(result => {
      if(result)
        response.success(res)
      else
        response.failure(res, ['Activity not exist'])
    })
    .catch(err => {
      response.failure(res, [err])
    })
}