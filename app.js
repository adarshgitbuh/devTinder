const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //craeteing a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Users stored sucessfully");
  } catch (err) {
    res.status(400).send("error saving the user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    res.send(user);
    // try {
    //   const users = await User.find({ emailId: userEmail });
    //   if (users.length === 0) {
    //     res.status(404).send("User not found");
    //   } else {
    //     res.send(users);
    //   }
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("something went wrong");
  }
});

//Delete req
app.delete("/user", async (req,res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);

    res.send("User deleted sucessfuly")
  } catch(err) {
    res.status(400).send("something went wrong");
  }
});

// Update the user data
app.patch("/user/:userId", async (req,res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
  const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];
  const isUpdateAllowed = Object.keys(data).every(k => 
    ALLOWED_UPDATES.includes(k)); 
    if(!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    const user = await User.findByIdAndUpdate({_id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated sucessfuly");
  } catch(err) {
    res.status(400).send("Update Failed: " + err.message);
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
