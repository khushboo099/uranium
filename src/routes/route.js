const express = require('express');
const router = express.Router();

const AllController= require("../controllers/AllController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuther", AllController.createAuther)
router.post("/createBook", AllController.createBook)
router.get("/allBooks", AllController.allBooks)
router.get("/UpdatedPrice", AllController.UpdatedPrice)
router.get("/costbetween", AllController.costbetween)

module.exports = router;