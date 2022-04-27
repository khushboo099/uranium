const AutherModel = require("../models/AutherModel")
const bookModel = require("../models/bookModel")

const createAuther= async function (req, res) {
    let data= req.body
    let savedData= await AutherModel.create(data)
    res.send({msg: savedData})
}

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})  
}

const allBooks = async function (req, res){
    let details = await AutherModel.find({auther_name: "Chetan Bhagat"})
    let id = details[0].author_id
    let bookname = await bookModel.find({author_id: id}).select({name: 1})
    res.send({msg: bookname})
}

const UpdatedPrice = async function (req, res){
    let data = await bookModel.find({name: "Two states"})
    let id = data[0].auther_id
    let autherName = await AutherModel.find({auther_id: id}).select({auther_name: 1, _id: 0})
    let BKname = data[0].name
    let updatebookprice = await bookModel.findOneAndUpdate({name:BKname}, {price: 100}, {new:true}).select({price:1, _id:0})
    res.send({msg: autherName, updatebookprice}) 
}

const costbetween = async function (req, res){
    let data = await bookModel.find({price: {$gt: 50, $lt:100}}).select({auther_id:1, _id:0})
    let id = data.map(inp => inp.auther_id)
    let arr = []
    for(let i=0; i<id.length; i++){
        let x = id[i]
        const auther = await AutherModel.find({auther_id:x}).select({author_name: 1, _id:0})
        arr.push(auther)
    }
    const authorname = arr.flat()
    res.send({msg: data})
} 


module.exports.createAuther= createAuther
module.exports.createBook= createBook
module.exports.allBooks= allBooks
module.exports.UpdatedPrice= UpdatedPrice
module.exports.costbetween= costbetween
