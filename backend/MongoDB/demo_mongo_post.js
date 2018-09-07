//POST items to mongoDB
const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'inventory';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  populateDB(db);
 
  client.close();

});

var populateDB = function(db) {

    var items = getItems();

    var users = getRequesters();

    console.log(items);

    console.log(users);

    var itemsCollection = db.collection('items');

    if (itemsCollection.find().toArray().length < 0)
        itemsCollection.insert(items, {safe:true}, function(err, result) {});
    else {
        itemsCollection.update(items, {safe:true}, function(err, result) {});
    }

    var usersCollection = db.collection('users');

    if (usersCollection.find().toArray().length < 0)
        usersCollection.insert(users, {safe:true}, function(err, result) {});
    else {
        usersCollection.update(users, {safe:true}, function(err, result) {});
    }   

}

var getItems = function() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    var tmp = [];
    var jsonObjectReturns = [];
    var i = 1;
    while(tmp.length === 0){
        xhr.open("GET", "https://cri-paris.freshservice.com/cmdb/items.json?page="+i, false);
        xhr.setRequestHeader('Authorization','Basic ' + Buffer.from('CJM4CoCBi0iy4Qu7bOS').toString('base64'));
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send();
                    
        tmp = JSON.parse(xhr.responseText);
        jsonObjectReturns = jsonObjectReturns.concat(tmp);

        i = i + 1
    }
    return jsonObjectReturns;
}

var getRequesters = function(){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    var tmp = [];
    var i = 1;
    var jsonObjectMails = [];
    while(tmp.length === 0){
        xhr.open("GET", "https://cri-paris.freshservice.com/itil/requesters.json?page="+i, false);
        xhr.setRequestHeader('Authorization','Basic ' + Buffer.from('CJM4CoCBi0iy4Qu7bOS').toString('base64'));
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send();

        tmp = JSON.parse(xhr.responseText);
        jsonObjectMails = jsonObjectMails.concat(tmp);

        i = i + 1;
    }
    return jsonObjectMails;
}