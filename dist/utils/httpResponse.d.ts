interface ResponsePayload<T> {
    status: boolean;
    message: string;
    data?: T;
}
export declare const successResponse: <T>(message: string, data?: T, statusCode?: number) => {
    statusCode: number;
    body: ResponsePayload<T>;
};
export declare const errorResponse: (message: string, statusCode?: number) => {
    statusCode: number;
    body: {
        status: boolean;
        message: string;
    };
};
export {};
