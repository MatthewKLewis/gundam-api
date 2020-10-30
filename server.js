const express = require('express')
const Gundam = require('./model/gundam.model')
const app = express();
app.use(express.json());

const port = 5225

app.set('json spaces', 2)

app.get('/', (req,res) => {
    Gundam.findOne()
        .then(gundam => res.json(gundam))
        .catch(err => res.send(err))
        .finally(()=> {console.log('enjoy the gundams')})
})

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})