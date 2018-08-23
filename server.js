const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

const PORT = process.env.PORT || 3005;

app.use(morgan("dev"));
app.use(cors());


app.use("/camcann",routes);

app.get("/", (req,res)=>{
    res.send("Working");
});


app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
});