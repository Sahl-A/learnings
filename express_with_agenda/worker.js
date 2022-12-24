const { agenda } = require("./agenda");

agenda.on('ready', () => {
  require('./jobs/example_job.js')
  agenda.start()
}) 