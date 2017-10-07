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

app.use(morgan("dev"));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('public'));
require("./passport")(passport);


app.use(session({
	secret:'ilovepassports',
	resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



app.post('/signup', passport.authenticate('local-signup', {}), function (req, res) {
	res.json({message:'Ok'});
});



app.post('/signin', passport.authenticate('local-login', {}), function (req, res) {
	console.log(JSON.stringify(req.err));
	res.json({message:"Ok"})
});



app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html")); // Single App
});


app.listen(port, () => {
	console.log("App is listening on port", port);
})








