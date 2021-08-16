var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {name: "Dharmik Naicker", image: "https://images.unsplash.com/photo-1628841380003-90e0e39b3ba1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Navika Naicker", image: "https://images.unsplash.com/photo-1628701298986-b7bd7e327df4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Dex Naicker", image: "https://images.unsplash.com/photo-1628755840182-11c29f38b44c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}, 
    {name: "Dharmik Naicker", image: "https://images.unsplash.com/photo-1628841380003-90e0e39b3ba1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Navika Naicker", image: "https://images.unsplash.com/photo-1628701298986-b7bd7e327df4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Dex Naicker", image: "https://images.unsplash.com/photo-1628755840182-11c29f38b44c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}, 
    {name: "Dharmik Naicker", image: "https://images.unsplash.com/photo-1628841380003-90e0e39b3ba1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Navika Naicker", image: "https://images.unsplash.com/photo-1628701298986-b7bd7e327df4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name: "Dex Naicker", image: "https://images.unsplash.com/photo-1628755840182-11c29f38b44c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} 

]

app.set("view engine","ejs");
app.get("/", function(req,res){
    res.render("home");
    console.log("\ requested"); 
});

app.get("/campgrounds", function(req,res){
   
    res.render("campgrounds", {campgrounds: campgrounds} );
    console.log("campground requested");
});

app.post("/campgrounds", function(req,res){
    var CampName = req.body.CampName;
    var ImgUrl = req.body.ImgUrl;
    var NewCamp = {name: CampName , image: ImgUrl};
    campgrounds.push(NewCamp);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Yelpcamp Started");
});