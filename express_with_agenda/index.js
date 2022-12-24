const express = require("express");
const app = express();
const times = require("lodash/times");
const port = process.env.PORT || 3005;
const { agenda } = require("./agenda");

agenda.define(
  "example-2",
  {
    concurrency: 2,
    lockLimit: 5
    // lockLifetime: 0
  },
  async (job) => {
    // setTimeout(() => {
    //   console.count(
    //     `job ${job.attrs.name} with id ${job.attrs._id} run successfully`
    //   );
    // }, 3000);
    console.count(
      `job ${job.attrs.name} with id ${job.attrs._id} run successfully`
    );
    
  }
);

(async function () {
  await agenda.start();

  // times(1000, () => agenda.now('example-1'))
  // times(11, () => agenda.now('example-1'))

  // await agenda.every("7 seconds", "example-1");

  // // Alternatively, you could also do:
  // await agenda.every("*/3 * * * *", "delete old users");
})();

const scheduleJob = async () => {
  times(20, () =>
    agenda.schedule("in 20 seconds", "example-2", {
      test: "123",
      test2: "1234",
    })
  );
};

app.get("/", async (req, res) => {
  await scheduleJob();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
