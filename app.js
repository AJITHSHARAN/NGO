var express=require("express");
app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var mongoose=require("mongoose");

app.get("/",function(req,res)
{
  res.render("home.ejs");
});
app.listen(3000);
