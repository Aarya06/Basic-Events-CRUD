const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myDataBase', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).
then( () => console.log('CONNECTED TO DATABASE') ).
catch( (e) => console.log('ERROR CONNECTING TO DATABASE ', e) );

app.get('/', (req, res) => {
    res.status(200).send({message: 'SERVER IS RUNNING'})
})

app.use('/event', router);

app.listen(PORT, () => {
    console.log('SERVER IS LISTENING ON PORT ',PORT)
})