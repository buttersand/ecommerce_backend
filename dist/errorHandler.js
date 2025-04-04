"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
/**
 * Express error-handling middleware.
 *
 * WHY?
 * - Centralizes error handling for all microservices.
 * - Ensures proper error messages are returned to clients.
 *
 * WHAT IF WE DIDN’T USE THIS?
 * - Each microservice would have to implement its own error-handling logic.
 * - More inconsistent and harder to maintain.
 */
const errorHandler = (err, req, res, next) => {
    console.error(" Error:", err.stack);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Avoid sending a 200 on error
    res.status(statusCode).json({
        message: err.message || "Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Hide stack in production
    });
};
exports.errorHandler = errorHandler;
