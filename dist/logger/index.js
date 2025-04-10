"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const loggerFormat = winston_1.format.combine(winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
}));
exports.logger = (0, winston_1.createLogger)({
    level: "info",
    format: loggerFormat,
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize(), loggerFormat),
        }),
        new winston_1.transports.File({
            filename: "logs/error.log",
            level: "error",
            format: loggerFormat,
        }),
        new winston_1.transports.File({
            filename: "logs/combined.log",
            format: loggerFormat,
        }),
    ],
});
