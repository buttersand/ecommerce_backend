import { createLogger, format, transports } from "winston";

const loggerFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
  }),
);

export const logger = createLogger({
  level: "info",
  format: loggerFormat,
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), loggerFormat),
    }),
    new transports.File({
      filename: "logs/error.log",
      level: "error",
      format: loggerFormat,
    }),
    new transports.File({
      filename: "logs/combined.log",
      format: loggerFormat,
    }),
  ],
});
