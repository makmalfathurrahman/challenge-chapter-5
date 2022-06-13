const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes/index");
const Middleware = require("./middleware/index");

app.set("view engine", "ejs");
app.use(express.static("views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("middleware"));

app.use(route);

app.use(Middleware.errorHandler);

app.all("*", (req, res) => {
  res.status(404);
  res.send("404 Page Not Found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
