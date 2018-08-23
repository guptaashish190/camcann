const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();
const mongoose = require("mongoose");
const keys = require("./keys");

const PORT = process.env.PORT || 3005;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(`mongodb://${keys.mongoDB.user}:${keys.mongoDB.password}@ds159997.mlab.com:59997/camcann`, (err) => {
    if(err){
        console.log(err);
    }
    console.log("Successfully connected to the database!");
});

app.use("/camcann",routes);

app.get("/", (req,res)=>{
    res.send("Working");
});


app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
});