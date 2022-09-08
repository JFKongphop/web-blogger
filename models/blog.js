// use mongoose
const mongoose = require('mongoose')

// connect mongoDB
// create new database
const dbUrl = 'mongodb://localhost:27017/blogDB';
mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true 
}).catch(err=>console.log(err))

// design Schema
let blogSchema = mongoose.Schema({
    title : String,
    date : String,
    description : String,
    image : String,
    content : String
})

// build model
let Blogger = mongoose.model('blogs', blogSchema);

// send out model
module.exports = Blogger;

// design function for save data
module.exports.saveProduct = function(model, data){
    model.save(data)
}