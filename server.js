/*----- Dependencies ------*/
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const functionsRouter = require("./routes/functions");

/*----- Express App ------*/
const app = express();

// use port 80 unless there exists a preconfigured port
const PORT = process.env.PORT || 8000;

/*----- Middleware Pipe ------*/
app.use(cors());
app.use(logger("dev"));

/*----- Routes ------*/
app.get("/", function (req, res) {
    res.json({ serverStatus: "It's alive" });
  });

app.use("/functions", functionsRouter);

/*----- Listener ------*/
app.listen(PORT, function () {
  console.log(`'Server running on ${PORT}`);
});
