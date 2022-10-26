const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const User = require("./models/user");
const connectDB = require("./configs/mongoose");

require("dotenv").config({ path: "./.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
connectDB();

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.use(
  session({
    secret: process.env.ENCRYPT_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/", (req, res) => {
  res.json({ app: "running" });
});

app.use("/api/' + name + '", require("./routes/' + name + '"));

app.listen(PORT, () => {
  console.log("✅ Listening on port " + PORT);
});
