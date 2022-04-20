let arr = {
'utenti':
[{"id":1,"first_name":"Bellanca","last_name":"Roundtree","email":"broundtree0@eepurl.com","gender":"Non-binary"},
{"id":2,"first_name":"Rogerio","last_name":"Egre","email":"regre1@exblog.jp","gender":"Female"},
{"id":3,"first_name":"Bertie","last_name":"Tuckerman","email":"btuckerman2@state.gov","gender":"Male"},
{"id":4,"first_name":"Todd","last_name":"Duinkerk","email":"tduinkerk3@statcounter.com","gender":"Male"},
{"id":5,"first_name":"Harlen","last_name":"Bane","email":"hbane4@reuters.com","gender":"Female"},
{"id":6,"first_name":"Bree","last_name":"Basil","email":"bbasil5@ted.com","gender":"Male"},
{"id":7,"first_name":"Omero","last_name":"Batterham","email":"obatterham6@jiathis.com","gender":"Female"},
{"id":8,"first_name":"Abbe","last_name":"Clack","email":"aclack7@seesaa.net","gender":"Female"},
{"id":9,"first_name":"Lucy","last_name":"Landells","email":"llandells8@who.int","gender":"Male"},
{"id":10,"first_name":"Carlita","last_name":"Hardington","email":"chardington9@sakura.ne.jp","gender":"Female"}]}






//terzo
let uomini = arr.utenti.filter(function(el){
    return el.gender == 'Female'
})
console.log(uomini)

//secondo
let index = arr.utenti.map(function(item) {
    return item.id
}).indexOf(7);

let risultato = arr.utenti.splice(index,1)

console.log(risultato)
console.log(arr)

//primo
arr.utenti.push('mario')
console.log(arr)

//vogliamo una pagina 1 con html ed input text e un button, va inserito un numero da uno a nove. vanno stampate tutte le coppie di numeri che sommati sono uguali a quel numero

 let calcolatore1=()=> {
    numero = document.getElementById("tra1e9").value
 }

let invio = document.getElementById("invio")
invio.addEventListener('click',calcolatore1)