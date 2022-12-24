const os = require("os");
const Agenda = require("agenda");

const mongoConnectionString = "mongodb://127.0.0.1/agenda";

const agenda = new Agenda({
  db: { address: mongoConnectionString },
  name: os.hostname + "-" + process.pid,
  // defaultLockLifetime: 0
  // defaultConcurrency: 2,
  // maxConcurrency: 3,
  processEvery: "30 seconds"
});

module.exports = {
  agenda,
};
