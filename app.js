var express         	= require("express"),
    app             	= express();

app.use(express.static("public"));
app.set("view engine", "ejs");

var port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.get("/", function(req, res) {
    res.render("index");
});

// app.get("/resume", function(req, res) {
// 	res.render("resume")
// });

// app.get("/about", function(req, res) {
// 	res.render("about")
// });

// app.get("/contact", function(req, res) {
// 	res.render("contact")
// });

// app.get("/wildtangent-casino", function(req, res) {
// 	res.render("")
// });

app.get("/about/reviews", function(req, res) {
    res.render("reviews");
});

app.listen(port, function() {
    console.log("Portfolio: Server is go");
});