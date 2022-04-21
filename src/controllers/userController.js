const UserModel= require("../models/userModel")

const CreateABook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const listofAllBooks= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.CreateABook= CreateABook
module.exports.listofAllBooks= listofAllBooks