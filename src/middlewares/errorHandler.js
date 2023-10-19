const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name === "errNotFound") {
    res.status(404).json({ status: false, message: "Error Not Found" });
  } else {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = errorHandler;
