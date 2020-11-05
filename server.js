//
// I was able to get https://gundamapi.herokuapp.com/
//

//Importing...
const express = require("express");
const path = require('path');
const dotenv = require('dotenv')

//Configuring...
const Gundam = require("./model/gundam.model");
const app = express();
app.use(express.json());

app.set("json spaces", 2);

//GET ROOT thanks: https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + '/documentation.html'), (err)=> {
//     if (err) console.log(err);
//   });
// });

//GET Random Gundam : https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose
app.get("/random", (req, res) => {
  Gundam.count().exec((err, total) => {
    var randomCount = Math.floor(Math.random() * total);
    Gundam.findOne()
      .skip(randomCount)
      .exec((err, gundam) => {
        res.json(gundam);
      });
  });
});

//GET Specific Gundam
app.get("/specific/:id", (req, res) => {
  Gundam.findById({ _id: req.params.id }).then((gundam) => {
    res.json(gundam);
  });
});

//GET Search: Mechanical Designer
app.get("/designer/:id", (req, res) => {
  Gundam.find({ "Mechanical Designer": { "$regex": `${req.params.id}`, "$options": "i" }}).then((gundam) => {
    res.json(gundam);
  });
});

//app.post
app.post("/create", (req, res) => {
  var newGundam = new Gundam({
    "Official Name": req.body.name,
    "Image": "www.imgur.com",
  })

  newGundam.save((err) => {
    if (err) throw err;
    else res.send('Gundam Created');
  });
});

//app.put - overwrite this one plz: 5fa40ed328d8b8cefe3953c0
app.put("/update/:id", (req, res) => {
  Gundam.findById({ _id: req.params.id }).then((gundam) => {
    gundam["Official Name"] = req.body.name
    gundam.save((err) => {
      if (err) throw err;
      else res.send('Gundam Created');
    });
  });
});

//app.delete
app.delete("/delete/:id", (req, res) => {
  Gundam.findByIdAndDelete({ _id: req.params.id }).then(() => {
    res.send("Gundam Deleted");
  });
});

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`Listening on Port: ${app.get('port')}`);
});
