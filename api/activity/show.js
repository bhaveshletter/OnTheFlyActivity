const Activity = require('../../models').Activity;
module.exports = (req, res) => {
  Activity.findById(req.params.id, function(err, result){
    if(err){
    }
    
    res.send({
      message: 'TODO: show activity!',
      status: 200,
      data: [{ activity: result }]
    })
  })
}