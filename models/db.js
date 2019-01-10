const mongoose = require('mongoose')
require('./user.model')

// mongoose.connect('mongodb://localhost:27017/MeanStackDB', { useNewUrlParser: true })

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },(err) => {
if(!err) {
    console.log('MongoDB connection is succeded') 
} else {
    console.log('Error in MongoDB ' + JSON.stringify(err, undefined, 2))
}
})

//require('./user.model')