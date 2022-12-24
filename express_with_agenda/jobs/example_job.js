const { agenda } = require("../agenda");

agenda.define(
  "example-1",
  // {
  //   // concurrency: 4,
  //   // lockLifetime: 0
  // },
  async (job) => {
    console.count(`job ${job.attrs.name} run successfully`);
  }
);