const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs");
app.use((req, res, next) => {
    console.log("hej från middleware" + req.method + " " + req.url);
    next();
})
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {

    res.render("index.hbs", { Födelsedatum: "Något från server sidan" });
});

app.listen(3000);