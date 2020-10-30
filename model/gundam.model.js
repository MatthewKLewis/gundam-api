const mongoose = require('../connection');

const Schema = mongoose.Schema

const gundamSchema = new Schema(
    {
        "Image": {
          type: String, 
          required: true, 
          validate: function(v) {
          let re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
          return re.test(v)
        }},
        "Classification": String,
        "Model Number": String,
        "Official Name": {type: String, required: true},
        "Head Height": String,
        "Overall Height": String,
        "Base Weight": String,
        "Full Weight": String,
        "Power Source": String,
        "Generator Output": String,
        "Armor Material": String,
        "Total Thrust": String,
        "Maximum Acceleration": String,
        "Effective Sensor Radius": String,
        "Crew": String,
        "Manufacturer": {type: String, trim: true},
        "First Deployment": String,
        "Last Seen": String,
        "Operator": String,
        "Known Pilots": String,
        "Standard": String,
        "Fixed": String,
        "TV Series": String,
        "Manga": String,
        "Mechanical Designer": String
    }
  );
  
module.exports = mongoose.model("Gundam", gundamSchema);