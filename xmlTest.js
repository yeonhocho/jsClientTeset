const xhr = new XMLHttpRequest();
const url = "http://localhost:50002/";

let jsonData;

console.log("start client " + url);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200){
        const response = xhr.responseText;
        jsonData = JSON.parse(response);
        let text = document.querySelector(".rank")
        for(var i = 0; i < Object.keys(jsonData).length;i++)
        {
            text.innerHTML +="<p>"+jsonData[i]["name"]+","
            + jsonData[i]["value"]+"</p></br>";
        }
    }

};

xhr.open("GET", url, true);
xhr.send();
