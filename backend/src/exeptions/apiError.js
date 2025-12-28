export class ApiError extends Error {
    constructor({ message, status, details = {} }) {
        super(message)

        this.status = status
        this.details = details
    }

    static badRequest({ message, details }) {
        return new ApiError({
            message,
            status: 400,
            details: details,
        })
    }

    static unauthorized({ details }) {
        return new ApiError({
            message: 'Unauthorized user',
            status: 400,
            details,
        })
    }

    static notFound({ details }) {
        return new ApiError({
            message: 'Not found',
            status: 404,
            details,
        })
    }
}
