const Activity = require('../../models').Activity,
  respone = require('../response');

module.exports = (req, res) => {
  new Activity({ name: req.body.name }).save()
    .then(result => {
      respone.success(res, result)
    })
    .catch(err => {
      const messages = []
      for (let field in err.errors) {
        messages.push(err.errors[field].message)
      }
      respone.failure(res, messages)
    })
}