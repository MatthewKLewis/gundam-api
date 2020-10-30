const express = require('express')
const Gundam = require('./model/gundam.model')
const app = express();
app.use(express.json());

const port = 5225

app.set('json spaces', 2)

app.get('/', (req,res) => {
    res.send(`
        <p>Go to: </p> 
        <a href="http://localhost:5225/gundam">this page</a> 
        <p>for a random gundam</p>
    `)
})

app.get('/gundam', (req,res) => {
    Gundam.findOne()
        .then(gundam => res.json(gundam))
        .catch(err => res.send(err))
        .finally(()=> {console.log('enjoy the gundams')})
})

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})