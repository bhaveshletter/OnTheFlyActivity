const Activity = require('../../models').Activity,
  response = require('../response');

module.exports = (req, res) => {
  Activity({ name: req.body.name }).save()
    .then(result => {
      response.success(res, result, 201)
    })
    .catch(err => {
      const messages = []
      for (let field in err.errors) {
        messages.push(err.errors[field].message)
      }
      response.failure(res, messages, 400)
    })
}