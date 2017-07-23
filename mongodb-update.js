//const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb'); //this is an es6 feature to convert object properties into variables
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongo db server");
  }
  console.log(" Connected to mongodb server");

  db.collection("Todos").findOneAndUpdate({_id : new ObjectID("597329ba906def7ed55f6973")},
  {
      $set:{
        completed : true
      }
  }, {
    returnOriginal : false
  }).then((res) => {
    console.log(res);
  })
  //db.close();
});
