const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "home.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"))
}); 
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","home.html"))
});
app.get("/services",(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","servicces.html"))
})

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/")

});
app.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("you have been logged in successfully")

})

app.listen(3000);

