<template>
    <div>
    </div>
</template>

/*
    @Service of the application

    * getItems: a function that returns a list of all existing items in the inventory
    * getRequesters : a function that returns the list of users
    * ...
*/

<script>
    export default {
        name: "Utils",
        methods: {
            getItems: function() {
                var xhr = new XMLHttpRequest();
                var tmp = [];
                var jsonObjectReturns = [];
                var i = 1;
                while(tmp.length === 0){
                    xhr.open("GET", "https://cri-paris.freshservice.com/cmdb/items.json?page="+i, false);
                    xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                    xhr.send();
                    
                    tmp = JSON.parse(xhr.response);
                    jsonObjectReturns = jsonObjectReturns.concat(tmp);

                    i = i + 1
                }
                return jsonObjectReturns;
            },
            getRequesters: function(){
                var xhr = new XMLHttpRequest();
                var tmp = []
                var i = 1
                var jsonObjectMails = []
                while(tmp.length === 0){
                    xhr.open("GET", "https://cri-paris.freshservice.com/itil/requesters.json?page="+i, false);
                    xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                    xhr.send();

                    tmp = JSON.parse(xhr.response);
                    jsonObjectMails = jsonObjectMails.concat(tmp)

                    i = i + 1
                }
                return jsonObjectMails;
            },
            getTickets: function() {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://cri-paris.freshservice.com/helpdesk/tickets.json", false);
                xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                xhr.send();
                return JSON.parse(xhr.response);
            },
            getReturnsByEmail: function(used_by) {
                var name   = used_by.substring(0, used_by.lastIndexOf("@"));
                var jsonObjectReturns = this.getItems();
                var res = [];
                var i = 0;
                var j =0;
                while(i < jsonObjectReturns.length){
                    if(jsonObjectReturns[i]["used_by"] === name){
                        res[j] = jsonObjectReturns[i]["name"];
                        j = j + 1;                
                    }
                    i = i + 1;
                }

                return res;
            },
            getInfosbyNFC: function(nfc_id) {
                var jsonObject_items = this.getItems();

                var user_email;
                var state_name;
                var condition;
                var due_return_date;

                var found = 0;
                var i = 0;

                while(found === 0 && i<jsonObject_items.length){
                    if(jsonObject_items[i]["levelfield_values"]["nfc_id_10000388191"] === nfc_id){
                        if(jsonObject_items[i]["user_id"] === null)
                            user_email = null;
                        else
                            user_email = this.getUserEmailbyId(jsonObject_items[i]["user_id"]);
                        state_name = jsonObject_items[i]["state_name"];
                        condition = jsonObject_items[i]["levelfield_values"]["condition_10000388191"];
                        due_return_date = jsonObject_items[i]["levelfield_values"]["due_return_date_10000388191"];

                        found = 1;
                    }
                    i = i + 1;
                }

                var infos = [user_email, state_name, condition, due_return_date]
                return infos;
            },
            getNameTypebyNFC: function(jsonObject_items, nfc_id) {
                console.log(jsonObject_items.length);

                var name;
                var type;
                var link = null;

                var used_by;
                var status;
                var condition;

                var found = 0;
                var i = 0;

                var apercus_equips = [
                    {type: "Computer", link: "../assets/equips/apercu_computer.png"},
                    {type: "Hardware", link: "../assets/equips/apercu_hardware.png"},
                    {type: "PC Laptop", link: "../assets/equips/apercu_computer.png"},
                    {type: "Projector", link: "../assets/equips/apercu_projector.png"},
                    {type: "Printer", link: "../assets/equips/apercu_printer.png"},
                    {type: "Monitor", link: "../assets/equips/apercu_monitor.png"}
                ];

                while(found === 0 && i<jsonObject_items.length){
                    
                    if(jsonObject_items[i]["levelfield_values"]["nfc_id_10000388191"] === nfc_id){
                        name = jsonObject_items[i]["name"];
                        type = jsonObject_items[i]["ci_type_name"];
                        if (jsonObject_items[i]["user_id"] === null) {
                            used_by = "";
                        }
                        else {
                            used_by = this.getUserEmailbyId(jsonObject_items[i]["user_id"]);
                        }
                        status = jsonObject_items[i]["state_name"];
                        condition = jsonObject_items[i]["levelfield_values"]["condition_10000388191"];
                        console.log(jsonObject_items[i]);
                        console.log(name + "," + type + "," + used_by + "," + condition);
                        var infos = [name, type, link, used_by, status, condition];
                        return infos;
                        found = 1;
                    }
                    i = i + 1;
                }
                
                return null;
            },
            getInfosbyEquipName: function(name) {
                var jsonObject_items = this.getItems();
                var user_email;
                var lending_date;
                var condition;
                var found = 0;
                var i = 0;
                   
                while(found === 0 && i<jsonObject_items.length){
                    if(jsonObject_items[i]["name"] === name){
                        user_email = this.getUserEmailbyId(jsonObject_items[i]["user_id"]);
                        condition = jsonObject_items[i]["levelfield_values"]["condition_10000388191"];
                        lending_date = jsonObject_items[i]["levelfield_values"]["lending_date_10000388191"];
                        found = 1;
                    }
                    i = i + 1;
                }
                var infos = [user_email, lending_date, condition]

                return infos;
            },
            getComingReservations: function(){
                var tickets = this.getTickets();
                var reservations = [];
                var i = 0;

                while(i < tickets.length){
                    if(tickets[i]["ticket_type"] === "Service Request"){
                        if(tickets[i]["subject"].includes("Laptop") || tickets[i]["subject"].includes("Apple MacBook")){
                            var res = tickets[i]["requester_name"];//, tickets[i]["urgency_name"]];
                            reservations.push(res);
                        }
                    }
                    i = i + 1;
                }
                return reservations;
            },
            getUserEmailbyId: function(user_id){

                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", "https://cri-paris.freshservice.com/itil/requesters/"+user_id+".json", false);
                    xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                    xhr.send();
                    var jsonObject_user = JSON.parse(xhr.response);
                    return jsonObject_user["user"]["email"]
                
            },
            putInfo: function(nfc_id, user_email, condition, state_name, due_return_date){
                var xhr = new XMLHttpRequest();

                var item_id = this.getItemIdbyNFC(nfc_id) //128
                var current_name = this.getCurrentNamebyId(item_id)
                var user_id = this.getUserIDbyEmail(user_email) //"10000315365"

                xhr.open("PUT", "https://cri-paris.freshservice.com/cmdb/items/"+item_id+".json", false);
                xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

                var data2send = '{"cmdb_config_item":{"name" : "'+current_name+'","user_id" : "'+user_id+'", "level_field_attributes":{"condition_10000388191": "' + condition + '", "lending_date_10000388191":"' + new Date() + '", "due_return_date_10000388191" : "'+due_return_date+'", "asset_state_10000388191":"'+state_name+'"}}}';
                
                xhr.send(data2send);
                return xhr.response;
            },
            getCurrentNamebyId: function(item_id){
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://cri-paris.freshservice.com/cmdb/items/"+item_id+".json", false);
                xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                xhr.send()
                var jsonObject = JSON.parse(xhr.response);
                return jsonObject["config_item"]["name"]
            },
            getItemIdbyNFC: function(nfc_id) {
                var jsonObject_items = this.getItems();
                var found = 0;
                var i = 0;
                var item_id;

                while(found === 0 && i<jsonObject_items.length){
                    if(jsonObject_items[i]["levelfield_values"]["nfc_id_10000388191"] === nfc_id){
                        item_id = jsonObject_items[i]["display_id"]
                        found = 1;
                    }
                    i = i + 1;
                }
                return item_id;
            },
            getUserIDbyEmail: function(user_email){
                var jsonObject_users = this.getRequesters();

                var found = 0;
                var i = 0;
                var user_id;

                while(found === 0 && i<jsonObject_users.length){
                    if(jsonObject_users[i]["user"]["email"] === user_email){
                        user_id = jsonObject_users[i]["user"]["id"]
                        found = 1;
                    }
                    i = i + 1;
                }

                return user_id;
            },
            getAllmails: function () {
                var jsonObjectMails = this.getRequesters();
                var res = []
                var i;
                for(i=0; i<jsonObjectMails.length; i++){
                    res[i] = jsonObjectMails[i]["user"]["email"]
                }

                res[jsonObjectMails.length] = "oumaima.ahizoun@cri-paris.org";
                return res;
            },
            autocomplete: function (inp, arr) {
                /**
                 * @inp : Text field element
                 * @arr: Array of possible autocomplete values
                 */

                var currentFocus;
                /*execute a function when someone writes in the text field:*/
                inp.addEventListener("input", function() {
                    var a, b, i, val = this.value;
                    /*close any already open lists of autocompleted values*/
                    closeAllLists();
                    if (!val) { return false;}
                    currentFocus = -1;
                    /*create a DIV element that will contain the items (values):*/
                    a = document.createElement("DIV");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    /*append the DIV element as a child of the autocomplete container:*/
                    this.parentNode.appendChild(a);
                    /*for each item in the array...*/
                    for (i = 0; i < arr.length; i++) {
                        /*check if the item starts with the same letters as the text field value:*/
                        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                            /*create a DIV element for each matching element:*/
                            b = document.createElement("DIV");
                            /*make the matching letters bold:*/
                            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                            b.innerHTML += arr[i].substr(val.length);
                            /*insert a input field that will hold the current array item's value:*/
                            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                            /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function() {
                                /*insert the value for the autocomplete text field:*/
                                inp.value = this.getElementsByTagName("input")[0].value;
                                /*close the list of autocompleted values,
                                (or any other open lists of autocompleted values:*/
                                closeAllLists();
                            });
                            a.appendChild(b);
                        }
                    }
                });
                /*execute a function presses a key on the keyboard:*/
                inp.addEventListener("keydown", function(e) {
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");
                    if (e.keyCode == 40) {
                        /*If the arrow DOWN key is pressed,
                        increase the currentFocus variable:*/
                        currentFocus++;
                        /*and and make the current item more visible:*/
                        addActive(x);
                    } else if (e.keyCode == 38) { //up
                        /*If the arrow UP key is pressed,
                        decrease the currentFocus variable:*/
                        currentFocus--;
                        /*and and make the current item more visible:*/
                        addActive(x);
                    } else if (e.keyCode == 13) {
                        /*If the ENTER key is pressed, prevent the form from being submitted,*/
                        e.preventDefault();
                        if (currentFocus > -1) {
                            /*and simulate a click on the "active" item:*/
                            if (x) x[currentFocus].click();
                        }
                    }
                });
                function addActive(x) {
                    /*a function to classify an item as "active":*/
                    if (!x) return false;
                    /*start by removing the "active" class on all items:*/
                    removeActive(x);
                    if (currentFocus >= x.length) currentFocus = 0;
                    if (currentFocus < 0) currentFocus = (x.length - 1);
                    /*add class "autocomplete-active":*/
                    x[currentFocus].classList.add("autocomplete-active");
                }
                function removeActive(x) {
                    /*a function to remove the "active" class from all autocomplete items:*/
                    for (var i = 0; i < x.length; i++) {
                        x[i].classList.remove("autocomplete-active");
                    }
                }
                function closeAllLists(elmnt) {
                    /*close all autocomplete lists in the document,
                    except the one passed as an argument:*/
                    var x = document.getElementsByClassName("autocomplete-items");
                    for (var i = 0; i < x.length; i++) {
                        if (elmnt != x[i] && elmnt != inp) {
                            x[i].parentNode.removeChild(x[i]);
                        }
                    }
                }
                /*execute a function when someone clicks in the document:*/
                document.addEventListener("click", function (e) {
                    closeAllLists(e.target);
                });
            }
        }
    }
</script>