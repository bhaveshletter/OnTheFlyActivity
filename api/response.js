module.exports = {
  success: (res, result = [], status = 200, message = 'success') => {
    res.send({
      message: message,
      status: status,
      data: result
    })
  },
  failure: (res, result = [], status = 404, message = 'failure') => {
    res.send({
      message: message,
      status: status,
      data: result
    })
  }
}