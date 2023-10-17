require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 9091;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
