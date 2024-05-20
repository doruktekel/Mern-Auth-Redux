const notFound = (req, res, next) => {
  const error = new Error(`Not Found = ${req.originalUrl}`);
  res.status(404);
  next();
};

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode === 200 ? 500 : err.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = err.message;
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { errorHandler, notFound };
