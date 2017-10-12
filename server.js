let express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  port = process.env.PORT || 8080,
	  morgan = require("morgan"),
	  path = require("path"),
    passport = require("passport"),
	  session = require("express-session"),
    mongoose = require("mongoose");
		flash = require("connect-flash");

var History = require("./models/History");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/project3");

const db = mongoose.connection;

db.once("open", function () {
	console.log("Mongoose starting fine!!");
});
 db.on("error", function (err) {
      console.log("Mongoose Error: ", err);
});

app.use(flash());
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



app.post('/signup', passport.authenticate('local-signup',
 			{successRedirect: '/main',
			 failureRedirect: '/signup',
			 failureFlash: true }), function (req, res) {
				//  res.json({message:'Ok'});
});



app.post('/signin', passport.authenticate('local-login',
			{successRedirect: '/main',
			 failureRedirect: '/signin',
       failureFlash: true }
		 ), function (req, res) {
				 console.log(JSON.stringify(req.err));
				//  res.json({message:"Ok"})
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {
  // We will find all the records, sort it in descending order, then limit the records to 5
  History.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.location);
  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  History.create({
    location: req.body.location,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html")); // Single App
});

app.listen(port, () => {
	console.log("App is listening on port", port);
})
