var mongoose = require('mongoose');
var Todo = mongoose.model('Todo', {
  text : {
    type : String,
    required : true, //mongoose validator
    minlength :1,//mongoose validator
    trim : true //mongoose validator
  },
  completed : {
    type : Boolean,
    default : false //validators in mongoose
  },
  completedAt: {
    type : Number,
    default: null
  }
});

module.exports = {Todo};
