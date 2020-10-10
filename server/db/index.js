const mongoose = require('mongoose')

const uri = "mongodb+srv://nadav_ceo:ceo!123@cluster0-0t00r.mongodb.net/movies-db?retryWrites=true&w=majority"

mongoose
    .connect(uri, { useNewUrlParser: true , useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
