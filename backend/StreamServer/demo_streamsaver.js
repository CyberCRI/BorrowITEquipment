/***********************  BEFORE USE, incluse these two scripts  ****************************/

/*
  * <script src="StreamSaver.js"></script>
  * <script src="https://cdn.rawgit.com/creatorrr/web-streams-polyfill/master/dist/polyfill.min.js"></script>
*/

const fileStream = streamSaver.createWriteStream('items.json')
const writer = fileStream.getWriter()
const encoder = new TextEncoder
            
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

        i = i + 1;
}
var json = JSON.stringify(jsonObjectReturns);
writer.write('items.json', json, 'utf8', null);
writer.close();