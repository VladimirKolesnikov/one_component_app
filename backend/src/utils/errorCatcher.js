export const errorCatcher = (wrappedFunc) => {
  return async (req, res, next) => {
    try {
      await wrappedFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
