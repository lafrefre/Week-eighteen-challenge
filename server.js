const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/week18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

app.listen(PORT, () => {
    console.log(`App running on port ${3000}!`);
});
