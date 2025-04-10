"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res) => {
    console.error(" Error:", err.stack);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message || "Server Error",
        stack: process.env.NODE_ENV === "development" && err.stack,
    });
};
exports.errorHandler = errorHandler;
