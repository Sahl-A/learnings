const logger = require("./config/logger");
const { WinstonBigQuery } = require("winston-bigquery");

module.exports = (req, res) => {
  try {
    logger.error({ age: 23, hobby: "sports" });
    // correct way
    // logger.error("this is a message ", {
    //   test: "123",
    //   again: "234",
    //   test3: "3",
    // });
  } catch (err) {
    console.log("errrrrrrrrrrrrrr", err);
  }
  res.end("Welcome to Micro");
};
