const xhr = new XMLHttpRequest();
const url = "http://localhost:50002/";

console.log("start client " + url);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200){
        const response = xhr.responseText;
        console.log(response);
    }

};

xhr.open("GET", url, true);
xhr.send();