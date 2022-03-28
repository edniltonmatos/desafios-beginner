const navs = document.querySelectorAll("h2")
const dados = document.querySelectorAll("p")
const h1 = document.querySelector("h1")
const people = [
    {name: "eduador", city: "alguma coisa", telephone: "(11) 984185120",},
    {name: "joão", city: "outra coisa", telephone: "(11)9841851120",},
    {name: "pedro", city: "São Paulo", telephone: "(11)9841851999",},
    {name: "ednilton", city: "nova york", telephone: "(11)9841851111",}
  ];

navs.forEach(teste => {
    teste.addeventlistener('click',  () => {
        h1.innerHTML = "doideira"
    })
});

/*for(i = 0; i < people.length; i++){
    navs[i].innerHTML = people[i].name
}*/
