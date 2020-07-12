const express = require('express')
  , app = express()
  , port = 8000
  , api = require('./api')
  , models = require('./models');

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
// const eraseDatabaseOnSync = true;
models.connectDb().then(async() => {
  // START if re-initialize database every express server start
  // if (eraseDatabaseOnSync) {
  //   await Promise.all([
  //     models.Activity.deleteMany({}),
  //   ]);
  // }
  // END if re-initialize database every express server start

  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))  
})



// https://www.robinwieruch.de/mongodb-express-setup-tutorial