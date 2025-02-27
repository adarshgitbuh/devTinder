const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./midlewares/auth");
//Handles Auth middlewares for all GET, POST -> all HTTP req..
app.use("/admin", adminAuth);

app.get("/user",userAuth, (req,res) => {
  res.send("user data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("User data sent");
});

app.use("/",(err,req,res,next) => {
  if(err) {
    res.status(500).send("somethig went wrong")
  }
})
  
app.get("/admin/deleteUser", (req, res) => {
  res.send("all users deleted");
});

app.listen(3000, () => {
  console.log("server is running on the port 3000..");
});
