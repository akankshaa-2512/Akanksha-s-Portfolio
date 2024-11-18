const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("view engine","ejs");
app.engine('ejs', ejsMate);
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/",(req,res)=>{
    res.render("./pages/index.ejs");
});
app.get("/about", (req,res)=>{
    res.render("./pages/about.ejs");
})
app.get("/skills", (req,res)=>{
    res.render("./pages/skills.ejs");
})
app.get("/projects", (req,res)=>{
    res.render("./pages/projects.ejs");
})
app.get("/contact", (req,res)=>{
    res.render("./pages/contact.ejs");
})
app.listen(8080,()=>{
    console.log("listenig at port 8080");
})