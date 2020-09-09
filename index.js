const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
const config = require('./config/key');

// MongoDB Connect
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB CONNECTED'))
.catch(err => console.log(err))

//Routing
app.get('/', (req, res) => {
    res.send('This is Main');
})


// listen
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
