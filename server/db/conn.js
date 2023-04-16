const mongoose = require("mongoose");




const DB = "mongodb+srv://anirudh1500:6SPhIh6q8zmmpy2A@cluster0.pjbdjio.mongodb.net/Authusers?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true

}).then (()=> console.log("database connected")).catch((errr)=>{
    console.log(errr);

})