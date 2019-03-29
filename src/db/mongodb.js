
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://qinze2019:Jing2019%40@cluster0-wu4cc.mongodb.net/admin?retryWrites=true"
const client = new MongoClient(uri, { useNewUrlParser: true })


module.exports = {
  data: function() {
    return new Promise((resolve, reject) =>{
      client.connect(err => {
        const collection = client.db("products").collection("product").find({}).toArray((err, db) => {
          //console.log(result)
          if(err) {
           return reject(err)
          } else {
            return resolve(db)
          }
        })
        //client.close()
      })
    })
  }
}


