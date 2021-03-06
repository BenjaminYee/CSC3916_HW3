var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);

//schema for the movies
var ReviewsSchema = new Schema({
    usename:String,
    movie:String,
    text:String,
    rating:Number
});
//returning the model to the server
module.exports = mongoose.model('Reviews', ReviewsSchema)