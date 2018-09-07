/////////////////////////////////////////////   ITEMS   ////////////////////////////////////////////////////////////
var xhr = new XMLHttpRequest();
function get_tickets() {
    xhr.open("GET", "https://cri-paris.freshservice.com/helpdesk/tickets.json", false);
    xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send();
                        
    console.log(JSON.parse(xhr.response));
    //postMessage(jsonObjectReturns);
}
console.log("tickets-worker");
get_tickets();