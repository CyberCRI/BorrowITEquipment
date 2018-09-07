/***************************  Demo : Multi-threading  ******************************/


//import get_mails from './get_mails.js';
//import get_items from './get_items.js';

var w1 = new Worker("../workers/get_mails.js");
var w2 = new Worker("../workers/get_items.js");
var w3 = new Worker("../workers/get_tickets.js");

w1.onmessage = function(event){
        console.log(event.data);
};
w2.onmessage = function(event){
        console.log(event.data);
};
w3.onmessage = function(event){
        console.log(event.data);
};

if(typeof(w1) === "undefined") {
        w1.terminate();
}
if(typeof(w2) === "undefined") {
        w2.terminate();
}
if(typeof(w3) === "undefined") {
        w3.terminate();
}