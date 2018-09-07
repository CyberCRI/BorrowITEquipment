///////////////////////////////////////////////   MAILS  //////////////////////////////////////////////////////////
var xhr = new XMLHttpRequest();
var tmp = []
var i = 1
var jsonObjectMails = []
function get_mails() {	
	while(tmp.length === 0){
			xhr.open("GET", "https://cri-paris.freshservice.com/itil/requesters.json?page="+i, false);
			xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
			xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
			xhr.send();

			tmp = JSON.parse(xhr.response);
			jsonObjectMails = jsonObjectMails.concat(tmp);

			i = i + 1
	}
	console.log(jsonObjectMails);
	//postMessage(jsonObjectMails);
}
console.log("mails-worker");
get_mails();