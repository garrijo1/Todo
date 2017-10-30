var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var mySchema = new Schema({
    property1:{type:String, required: true},
    property2:{type:Number, required: true},
});
//This is the schema for any records posted 
module.exports = 
 Mongoose.model('users2', mySchema);
