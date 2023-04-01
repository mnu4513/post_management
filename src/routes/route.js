const express = require("express");
const router = express.Router();

// test route --
router.get("/test", function (req, res) {
  res.send("app connected successfully");
});

// user routes -- 
const { createUser, loginUser } = require("../controllers/userController");
router.post("/create-user", createUser);
router.post("/login-user", loginUser);


// post routes -- 

module.exports = router;
