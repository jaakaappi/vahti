const path = require("path");
const express = require("express");

const app = express();
app.use("/", express.static(path.join(__dirname, "static")));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
