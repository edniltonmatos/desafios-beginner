var request = window.indexedDB.open("indexedDB", 3);
var db;

request.onerror = function(){
    alert("erro");
};

request.onsuccess = function(){
    db = request.result;
};

db.onerror = function(){
    alert("Database error:" + event.target.errorCode);
};

request.onupgradeneeded = function(){
    var db = event.target.result;
    var objectStore = db.createObjectStore("nome", {keyPath:"minhaChave "});
};