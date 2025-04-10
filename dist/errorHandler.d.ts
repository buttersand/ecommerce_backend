import { Request, Response } from "express";
declare const errorHandler: (err: any, req: Request, res: Response) => void;
export { errorHandler };
