class HttpException extends Error {
  statusCode: number;

  constructor(statusCode: number, public readonly message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { HttpException };
