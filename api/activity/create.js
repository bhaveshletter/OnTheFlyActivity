const Activity = require('../../models').Activity;
module.exports = (req, res) => {
  const newActivity = new Activity({ name: req.body.name })
  newActivity.save()

  res.send({
    message: 'TODO: create activity!',
    status: 200,
    data: [{ activity: newActivity }]
  })
}