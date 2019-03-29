const express = require('express')
var assert = require('assert')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
var db = require('../src/db/mongodb.js')

const app = express()
const port = process.env.PORT

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')
const viewPath = path.join(__dirname, '../templates/views')
const bootstrapPath = path.join(__dirname, '../node_modules/bootstrap/dist/')
const jqueryPath = path.join(__dirname, '../node_modules/jquery/dist/')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.use(express.static(bootstrapPath))
app.use(express.static(jqueryPath))

app.listen(port, () => {
    console.log('Server is up on port 3000.')

})


app.get('/', (req, res) => {
    db.data().then((values) => {
        res.render('index', {
            title: 'Products',
            products: values
        })
        console.log(values)
    })
    
})


