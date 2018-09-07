//POST items to the freshservice API
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
     
// Database Name
const dbName = 'inventory';
     
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

    console.log("Connected successfully to server");
     
    const db = client.db(dbName);

    populateAPI(db);
     
    client.close();

});

var populateAPI = function(db) {

    var mongo_items = getItemsMongo(db);

    var api_items = getItems();
    
    for (var j = 0; j < mongo_items.length; j++) {
        var i = 0;

        if (mongo_items[i]["state_name"].toString().trim() === api_items[i]["state_name"].toString().trim()) {}
        else {

            var name = mongo_items[i]["name"];
            var user_id = mongo_items[i]["user_id"];
            var condition = mongo_items[i]["levelfield_values"]["condition_10000388191"];
            var return_date = mongo_items[i]["levelfield_values"]["due_return_date_10000388191"];
            var lending_date = mongo_items[i]["levelfield_values"]["lending_date_10000388191"];

            var data2send = '{"cmdb_config_item":{"name" : "'+name+'","user_id" : "'+user_id+'", "level_field_attributes":{"condition_10000388191": "' + condition + '", "lending_date_10000388191":"' + lending_date + '", "due_return_date_10000388191" : "'+ return_date +'", "asset_state_10000388191":"In Use"}}}';
        
            xhr.send(data2send);

        }
        
        i++;
    }

    console.log("SUCCESS !!");
}

var getItemsMongo = function(db) {
    return db.collection('items').find().toArray();
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