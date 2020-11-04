const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/gundam";

mongoose
  .connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(instance =>
    console.log(`Connected to db`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;