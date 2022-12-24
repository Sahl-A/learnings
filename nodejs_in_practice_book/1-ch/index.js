const CountStream = require("./countstream");
const countStream = new CountStream("book");
const http = require("http");

http.get("http://www.google.com", function (res) {
  res.pipe(countStream);
});

countStream.on("total", function (count) {
  console.log("Total matches:", count);
});

// console.log('exports======= ',CountStream);
// console.log('exports======= ',exports);
// console.log('require======= ',require);
console.dir(require, {depth: 5})

// console.log(process.cwd());
