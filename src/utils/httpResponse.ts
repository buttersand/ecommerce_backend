interface ResponsePayload<T> {
  status: boolean;
  message: string;
  data?: T;
}

export const successResponse = <T>(
  message: string,
  data?: T,
  statusCode: number = 200,
) => {
  return {
    statusCode,
    body: {
      status: true,
      message,
      data,
    } as ResponsePayload<T>,
  };
};

export const errorResponse = (message: string, statusCode: number = 500) => {
  return {
    statusCode,
    body: {
      status: false,
      message,
    },
  };
};
