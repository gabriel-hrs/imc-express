function logger(req, res, next) {
  console.log("================================================");
  console.log("LOG BEFORE EXEC");
  next();
  console.log("================================================");
  console.log("LOG AFTER EXEC");
}

module.exports = logger;
