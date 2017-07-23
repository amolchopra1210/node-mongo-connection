const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongo db server");
  }
  console.log(" Connected to mongodb server");

  //deleteMany

  // db.collection("Todos").deleteMany({text : "Hit the shower"}).then((res)=> {
  //   console.log(res);
  // })

  //deleteOne

  // db.collection("Todos").deleteOne({text : "Hit the shower"}).then((res)=> {
  //   console.log(res);
  // })

  //findOneandDelete
  db.collection("Todos").findOneAndDelete({completed : false}).then((res) => {
    console.log(res);
  })

  db.collection("Todos").find({completed : false}).toArray().then((docs) => {
    console.log("Todos");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch records", err);
  })
  //db.close();
});
