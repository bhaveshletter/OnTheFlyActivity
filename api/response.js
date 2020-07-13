module.exports = {
  success: (res, result, message = 'success', status = 200) => {
    res.send({
      message: message,
      status: status,
      data: result
    })
  },
  failure: (res, result = [], message = 'failure', status = 404) => {
    res.send({
      message: message,
      status: status,
      data: result
    })
  }
}