const express = require("express");
require("dotenv").config();
const app = express();
const link = "the best is back";
let mongoose = require("mongoose");
const dataCollection = require('./Routes/dataCollection'); 

const mylink = "mongodb+srv://newdeveloper:jack12345@balolebwami.uxh52yy.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mylink).then(() =>{
    app.listen(process.env.PORT || 4000, () => {
        console.log("Now you're Online at Port 4000 Atlas Code");
        
        app.get("/Data", (req, res) => {
            res.json({ message: "Welcom balolebwami " + link });
          });  
    });
      
})

app.use(express.json());

app.use('/jacques',dataCollection)


 
// midleware function 
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next();
})


