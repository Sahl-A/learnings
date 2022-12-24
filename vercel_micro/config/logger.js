const winston = require("winston");
const { WinstonBigQuery } = require("winston-bigquery");

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: true,
      json: true,
      stringify: true,
      //   level: process.env.LOG_LEVEL || "info",
    }),
    new WinstonBigQuery({
      dataset: "test",
      table: "invoices_errors",
      create: false,
      schema: { meta: "string", timestamp: "timestamp", error: "string" },
    }),
  ],
});

module.exports = logger;
