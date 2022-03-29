const dadosClientes = [
    {ssn: "333", nome:"Ednilton", idade:"18", email:"edniltonsocial@gmail.com"},
    {ssn: "222", nome:"Matilde", idade:"40", email:"edniltoprogramador@gmail.com"}
];
const dbName = "clientes";
var request = indexedDB.open(dbName, 2);

request.onerror = function(){
    alert("erro");
};

request.onupgradeneeded = function(){
    var db = event.target.result;
    
    var objectStore = db.createObjecteStore("clientes", {keyPath:"ssn"});

    objectStore.creacteIndex("name", "name", {unique:false});

    objectStore.creacteIndex("email", "email", {unique:true});

    objectStore.transaction.oncomplete = function(){
        var clientesObjectStore = db.transaction("clientes", "readwrite").objectStore("clientes");
        for (var i in dadosCliente){
            clientesObjectStore.add(dadosCliente[1]);
        }
    }
};


