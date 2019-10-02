const express = require('express');
const mongoose = require('mongoose');
const credentials = require('../access');
const routes = require('./routes');
const app = express();

app.use(express.json())
mongoose.connect('mongodb+srv://'+ credentials.username + ':' + credentials.password + '@omnistackcluster-kudsu.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
// app.post('/users', (req, res) => {
//   return res.json(req.body)
// });

// app.get('/', (req, res) => {
//   return res.json({"message" : "HELLO 2.0"});
// });

app.use(routes);
app.listen(3333);