const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();


mongoose.connect('mongodb://localhost:27017/UserCalorie', {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine', 'ejs');
app.use(express.static("public"));


const UserSchema = new mongoose.Schema({
    Name : String,
    Date : String,
    Time: TimeRanges,
    Location: String,
    Description:String
});
const FinanceIssue = mongoose.model("FinanceIssue",financeSchema);

app.get("/",function(req,res){
    res.render("home");
})


app.get("/daily",function(req,res){
    res.render("daily");
})


app.get("/monthly",function(req,res){
    res.render("monthly");
})

app.listen(3000,function(){
    console.log("Server is running at 3000!")
})