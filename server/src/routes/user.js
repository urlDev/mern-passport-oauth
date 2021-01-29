const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get(
  "/auth/google",
  // scope comes from google auth.
  // profile means the basic info about the users profile
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

router.get("/getUser", (req, res) => {
  res.send(req.user);
});

module.exports = router;
