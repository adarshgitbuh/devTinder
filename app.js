const express = require("express")

const app = express();

app.use("/",(req,res) => {
   res.send("namste bro")
})

app.use("/test",(req,res)=> {
  res.send("hello from the server")
});

app.use("/hello",(req,res) => {
    res.send("hello hello hello");
});

app.use("/bai",(req,res) => {
    res.send("bai bai bro");
});

app.listen(3000, () => {
    console.log("server is running on the port 3000..")
});