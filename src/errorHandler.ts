import { Request, Response } from "express";

const errorHandler = (err: any, req: Request, res: Response) => {
  console.error(" Error:", err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "development" && err.stack,
  });
};

export { errorHandler };
