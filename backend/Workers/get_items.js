/////////////////////////////////////////////   ITEMS   ////////////////////////////////////////////////////////////
var xhr = new XMLHttpRequest();
var tmp = [];
var jsonObjectReturns = [];
var i = 1;
function get_items() {
    while(tmp.length === 0){
        xhr.open("GET", "https://cri-paris.freshservice.com/cmdb/items.json?page="+i, false);
        xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send();
                        
        tmp = JSON.parse(xhr.response);
        jsonObjectReturns = jsonObjectReturns.concat(tmp);

        i = i + 1
    }
    console.log(jsonObjectReturns);
    //postMessage(jsonObjectReturns);
}
console.log("items-worker");
get_items();