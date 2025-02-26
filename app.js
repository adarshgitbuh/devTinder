const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log("handling the server");
    next();
    // res.send("response1");
  },
  (req, res,next) => {
    //res.send("response2");
    console.log("Handling the req"q);
    next();
  },
  (req, res) => {
    res.send("response3");
    console.log("handler...3");
  },
  (req, res) => {
    res.send("respon44");
    console.log("hendler55");
  }
);

app.listen(3000, () => {
  console.log("server is running on the port 3000..");
});
