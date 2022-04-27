const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true }, 

    authorName: String, 
        
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    Totalpages: Number,
    year: {type: Number, default: 2021},
    Tags: [String],
    StockAvailable: Boolean,

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

