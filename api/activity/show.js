module.exports = (req, res) => {
  res.send({
    message: 'TODO: show activity!',
    status: 200,
    data: [{ id: req.params.id }]
  })    
}