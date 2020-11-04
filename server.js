const express = require("express");
const Gundam = require("./model/gundam.model");
const app = express();
app.use(express.json());

const port = 4000;
app.set("json spaces", 2);

//GET ROOT
app.get("/", (req, res) => {
  res.send(`
        <p>Go to: </p> 
        <a href="http://localhost:4000/random">this page</a> 
        <p>for a random gundam</p>
    `);
});

//GET Random Gundam : https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose
app.get("/random", (req, res) => {
  count = Gundam.count().exec((err, total) => {
    var randomCount = Math.floor(Math.random() * total);

    Gundam.findOne()
      .skip(randomCount)
      .exec((err, gundam) => {
        res.json(gundam);
      });
  });
});

//GET Specific Gundam
app.get("/gundam/:id", (req, res) => {
  Gundam.findById({ _id: req.params.id }).then((gundam) => {
    res.json(gundam);
  });
});

//app.post

//app.put

//app.delete
app.delete('/delete/:id', (req, res) => {
    Gundam.findByIdAndDelete({ _id: req.params.id }).then(()=> {
        console.log('Gundam Deleted')
    })
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
