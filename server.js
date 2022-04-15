const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chore-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongoose connected'))
.catch((err => console.log(err)))

// app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));