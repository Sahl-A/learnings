const dotenv = require("dotenv");
const { BigQuery } = require("@google-cloud/bigquery");

dotenv.config();

const bigquery = new BigQuery();

const insertRows = async () => {
  //   const rows = [
  //     { name: "Tom", age: 30 },
  //     { name: { first: "sahl", second: "abdelrahman" }, age: 32, weight: 87 },
  //   ];

  const rows = {
    backup: {
      status: "completed",
      past_stations: [],
      schedule: ["2021-10-08T02:45:00.000Z"],
      arrivals: [],
      _id: "615bc00b0e4f88001be5807d",
      backup_schedule_id: "6135f168f72c6a001d419e2a",
      bus_type: "5cb61b65da5d250019a33684",
      bus: "5de1333e214d0c001a16a19c",
      captain: "5d7b96d38c1ad8001a9d6655",
      backup_station: "5c5456b670207000188091ac",
      start_date: "2021-10-08T02:45:00.000Z",
      end_date: "2021-10-08T17:00:00.000Z",
      city: "5c2f43865d8b280018078114",
      updatedAt: "2021-10-07T07:19:21.633Z",
    },
  };

  try {
    console.log("================");
    console.log("before adding");
    console.log("================");
    // Insert data into a table
    const result = await bigquery
      .dataset("test")
      .table("invoices_errors")
      .insert({ backup: "Tom" });
    console.log("================");
    console.log("after adding", result);
    console.log("================");

    // console.log(`Inserted ${rows.length} rows`);
  } catch (e) {
    // Pretty print error as JSON
    console.error(JSON.stringify(e, null, 2));
  }
};

insertRows();

// module.exports = insertRows;
