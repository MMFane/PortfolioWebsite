var express         	= require("express"),
    app             	= express();

app.use(express.static("public"));
app.set("view engine", "ejs");

var port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/wildtangent-casino", function(req, res) {
	res.render("")
});

app.listen(port, function() {
    console.log("Portfolio: Server is go");
});