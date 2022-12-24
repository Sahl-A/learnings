const mongoose = require("mongoose");
const { generateCity } = require("./utils/db/city");
const { generateCaptain } = require("./utils/db/captain");

mongoose.connect("mongodb://localhost:27017/test");

const catSchema = mongoose.Schema({
  name: String,
  color: String,
});

const Cat = mongoose.model("Cat", catSchema);

const kitty = new Cat({ name: "Zildjian", color: "white" });

console.log(generateCity());
console.log("===================");
console.log(generateCaptain());

// kitty.save().then(() => console.log("meow"));

// const kittens = kitty.find().then(console.log);

// console.log(kittens);
