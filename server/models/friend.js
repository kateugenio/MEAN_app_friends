var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var FriendSchema = new Schema({
  firstName: {type: String, required: true, minlength: 3},
  lastName: {type: String, required: true, minlength: 3},
  dob: {type: Date, required: true}
});


module.exports = mongoose.model("Friend", FriendSchema);
