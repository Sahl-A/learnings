const fs = require("fs");
const server = require("http").createServer();
const createFileWithStreamsIfNotExists = () => {
  const files = fs.readdirSync(__dirname);
  if (!files.includes("big.file")) {
    const file = fs.createWriteStream("./big.file");
    for (let i = 0; i <= 1e7; i++) {
      file.write(
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
      );
    }
    file.end();
  }
};

createFileWithStreamsIfNotExists()

server.on("request", (req, res) => {
  // stores all file into memory then send it
  // Inefiicient
  // fs.readFile("./big.file", (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });

  // since res is writable stream, we can create 
    // readable stream and pipe the data
    // This way, it will not store the file in memory
  const src = fs.createReadStream("./big.file");
  src.pipe(res);
});

server.listen(8001, () => {
  console.log(`listening on port 8001 with process ${process.pid}`);
});

// out of streams topic, just wanted to test process stdout to write to shell instead of console.log
// const helloWorld = () => 'this is test of stdout'
// console.log(helloWorld());

// process.stdout.write(helloWorld());