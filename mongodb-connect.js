const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongo db server");
  }
  console.log(" Connected to mongodb server");

  //Inserting data into database

  // db.collection('Todos').insertOne({
  //   text : "Go to the market",
  //   completed : false
  // }, (err, result)=> {
  //   if(err){
  //     console.log("Unable to connect to server", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  // db.collection('Todos').insertOne({
  //   text : "Go to the gym",
  //   completed : false
  // }, (err, result)=> {
  //   if(err){
  //     console.log("Unable to connect to server", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  db.collection("Users").insertOne({
    name : "Amol Chopra",
    age: 26,
    location : "India"
  }, (err, result) => {
    if(err){
      console.log("There is an error", err);
    }
    //Object id are made up of a lot of things, one being the timestamp. We can extract the timestamp from the object id in the following manner.
    console.log(result.ops[0]._id.getTimestamp());
  })
  db.close();
});
