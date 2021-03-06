const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const credentials = require('../access');
const routes = require('./routes');
const app = express();

app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://${credentials.username}:${credentials.password}@omnistackcluster-kudsu.mongodb.net/omni9?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true });
    

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);