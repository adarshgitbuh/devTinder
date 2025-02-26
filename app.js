const express = require("express")

const app = express();



app.get("/user/:userId/:name/:password", (req,res) => {
    console.log(req.params);
    res.send({firstname : "adarsh", lastname: "shetty"});
});


app.listen(3000, () => {
    console.log("server is running on the port 3000..")
});