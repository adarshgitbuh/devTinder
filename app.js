const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //craeteing a new instance of the user model
  const user = new User({
    firstName: "lambo",
    lastName: "car",
    emailId: "lambo@gmail.com",
    passwor: "ginini",
  });

  try {
    await user.save();
    res.send("Users stored sucessfully");
  } catch (err) {
    res.send(400).send("error saving the user:" + err.message);
  }

});

connectDB()
  .then(() => {
    console.log("Dtabase connection established...");
    app.listen(3000, () => {
      console.log("server is running on the port 3000..");
    });
  })
  .catch((err) => {
    console.log("Database connot be connected...");
  });
