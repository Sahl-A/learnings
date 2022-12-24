const fs = require("fs");

const file = fs.readFile("./familiarization-9ba98b89f83e.json", (err, data) => {
  console.log("==========");
  //   console.log(JSON.parse(data.toString()));
  fs.writeFile("./keysStrigified", JSON.stringify(data.toString()), () => {});
});
