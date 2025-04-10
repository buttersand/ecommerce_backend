"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (message, data, statusCode = 200) => {
    return {
        statusCode,
        body: {
            status: true,
            message,
            data,
        },
    };
};
exports.successResponse = successResponse;
const errorResponse = (message, statusCode = 500) => {
    return {
        statusCode,
        body: {
            status: false,
            message,
        },
    };
};
exports.errorResponse = errorResponse;
