const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.get("/createUser", commonMW.mid1, commonMW.mid2, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)


module.exports = router;