class Middleware {
  static putMiddleware(req, res, next) {
    console.log(">>> Middleware");
    console.log(req.body);
    next();
  }

  static errorHandler(err, req, res, next) {
    console.log(">>> Error Handler");
    console.log(err);
    if (err.status) {
      const condStatus = err.status;
      res.status(condStatus).json(err);
    } else {
      res.status(400).send("Error: Something broke!");
    }
  }
}

module.exports = Middleware;
