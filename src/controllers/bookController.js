const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
    let booksInYear = await BookModel.find({ year: 2021})
    res.send({ msg: booksInYear })
}

const getParticularBooks = async function (req, res) {
    let condition = req.body
    let book = await BookModel.find(condition)    
    res.send({msg: book})
}

const getXINRBooks = async function (req, res) {
    let bookByPrice = await BookModel.find({ prices: { $in: ["100INR", "200INR", "500INR"] } })
    res.send({ msg: bookByPrice })
}

const getRandomBooks = async function (req, res) {
    let randomBooks = await BookModel.find({ $or: [{ stockAvailable: "true" }, { totalPages: { $gt: 500 } }] });
    res.send({ msg: randomBooks })
}


module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
