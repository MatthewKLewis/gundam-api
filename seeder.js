const gundamRawData = require("./seedData/gundamData3.json");
const gundamModel = require("./model/gundam.model");

gundamModel.findByIdAndDelete().then(() => {
  gundamRawData.forEach((item) => {
    gundamModel.create(item)
      .then((item) => {
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
