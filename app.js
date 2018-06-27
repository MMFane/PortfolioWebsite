var express         	= require("express"),
    app             	= express();

app.use(express.static("public"));
app.set("view engine", "ejs");

var port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/test", function (req, res) {
    res.render("ANIMATIONTEST");
});

app.get("/projects/wildtangent-casino", function(req, res) {
	res.render("proj-wtc")
});

app.get("/projects/spell-slingers", function (req, res) {
    res.render("proj-ss")
});

app.get("/projects/stellar-fortune", function (req, res) {
    res.render("proj-sf")
});

app.get("/about/reviews", function(req, res) {
    res.render("reviews");
});

app.get("/alternate", function (req, res) {
    res.render("AltStylePage");
});

app.listen(port, function() {
    console.log("Portfolio: Server is go");
});