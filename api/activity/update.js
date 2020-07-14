const Activity = require('../../models').Activity,
  response = require('../response');

module.exports = (req, res) => {
  let toBeUpdated = {}

  if(req.body.name)
    toBeUpdated['name'] = req.body.name

  if(req.body.remind_at)
    toBeUpdated['remind_at'] = req.body.remind_at

  Activity.findByIdAndUpdate(req.params.id, toBeUpdated, { new: true })
    .then(result => {
      response.success(res, [{ activity: result }])
    })
    .catch(err => {
      const messages = []
      for (let field in err.errors) {
        messages.push(err.errors[field].message)
      }
      response.failure(res, messages)
    })
}