let express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  port = process.env.PORT || 8080,
	  morgan = require("morgan"),
	  path = require("path"),
      passport = require("passport"),
	  session = require("express-session"),
      mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/zoo");

const db = mongoose.connection;


db.once("open", function () {
	console.log("Mongoose starting fine!!");
});
 db.on("error", function (err) {
      console.log("Mongoose Error: ", err);
 });

app.use(bodyParser({ defer: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(express.static('public'));
require("./passport")(passport);


app.use(session({
	secret:'ilovepassports'
}));

app.use(passport.initialize());
app.use(passport.session());




app.post('/signup', passport.authenticate('local-signup', {
    failureRedirect: '/'
}), function (req, res) {

    res.json({message:"Ok"})
});

app.post("/signin", (req, res) => {

	console.log(req.body);

	res.redirect("/dashboard");
});


app.get("*", (req, res) => {

	res.sendFile(path.join(__dirname, "public/index.html"));

});



app.listen(port, () => {
	console.log("App is listening on port", port);
});