export class ApiError extends Error {
  constructor({ message, status, details = {} }) {
    super(message);

    this.status = status;
    this.details = details;
  }

  static badRequest({ message, details }) {
    return new ApiError({
      message,
      status: 400,
      details: details,
    });
  }

  static unauthorized({ message = "Unauthorized user", details }) {
    return new ApiError({
      message,
      status: 401,
      details,
    });
  }

  static notFound({ message = "Not found", details }) {
    return new ApiError({
      message,
      status: 404,
      details,
    });
  }
}
