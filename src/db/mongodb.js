//method 1
// const MongoClient = require('mongodb').MongoClient
//const uri = 'mongodb+srv://qinze2019:Jing2019%40@cluster0-wu4cc.mongodb.net/admin?retryWrites=true'
// const client = new MongoClient(uri, { useNewUrlParser: true })

const mongoose = require('mongoose') 

mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    dbName: 'products'
})

var connection = mongoose.connection

connection.on('connected', function() {
    console.log('connected to db')
})

connection.on('disconnected', function() {
    console.log('disconnected to db')
})

connection.on('error', function(error) {
    console.log('db connected error', error)
})

//method 1
// module.exports = {
//   data: function() {
//     return new Promise((resolve, reject) =>{
//       client.connect(err => {
//         const collection = client.db("products").collection("product").find({}).toArray((err, db) => {
//           //console.log(result)
//           if(err) {
//            return reject(err)
//           } else {
//             return resolve(db)
//           }
//         })
//         //client.close()
//       })
//     })
//   },
//   finddata: function(id) {
//     return new Promise((resolve, reject) =>{
//       client.connect(err => {
//         const collection = client.db("products").collection("product").find({ _id: id}).toArray((err, db) => {
//           if(err) {
//            return reject(err)
//           } else {
//             return resolve(db)
//           }
//         })
//         //client.close()
//       })
//     })
//   }
// }


