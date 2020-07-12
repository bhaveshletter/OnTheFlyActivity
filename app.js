const express = require('express')
  , app = express()
  , port = 8000
  , api = require('./api');

app.use(express.json());
// req.accepts('application/json')

// START Routing

app.get('/', api.root);
app.get('/list', api.index);
app.get('/show/:id', api.show);
app.post('/create', api.create);
app.patch('/update/:id', api.update);
app.delete('/delete/:id', api.destroy);

// END Routing

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
