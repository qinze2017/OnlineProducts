const mongoose = require('mongoose')
require('../db/mongodb')

const productSchema = new mongoose.Schema({
        name: String,
        price: String,
        color: String,
        sizes: String,
        image: String
})

const Product = mongoose.model('product', productSchema, 'product')

module.exports = Product