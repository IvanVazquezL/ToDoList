const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

var itemDayArray = []
let workArray = []

app.get("/",function(req,res){

  res.render('list',{listTitle:date.getDate(),itemArray:itemDayArray});

});

app.post("/",function(request,response){
  var item = request.body.newItem;

  if(request.body.list === "Work"){
    workArray.push(item);
    response.redirect("/work");
  }
  else{
    itemDayArray.push(item);
    response.redirect("/");
  }

  console.log(request.body.newItem);
});

app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List",itemArray: workArray});
})

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workArray.push(item);
  res.redirect("/work");

});

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(8080,function(){
  console.log("Server started on port 8080");
})
