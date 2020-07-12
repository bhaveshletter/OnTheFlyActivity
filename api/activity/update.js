module.exports = (req, res) => {
  res.send({
    message: 'TODO: update activity!',
    status: 200,
    data: [{ id: req.params.id }]
  })
}