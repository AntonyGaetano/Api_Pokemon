
const API = () =>{
    
var pokemon = document.getElementById("pokemon").value

var url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

fetch(url)
.then(response => response.json())
.then(data=>{
    //document.write(data.name)
    //document.write("<br>")
    //document.write(data.order)
    //document.write(`<img src='${data.sprites.front_default}'/>`)
    document.getElementById("img-pokemon").src=data.sprites.front_default

    document.getElementById("nome").innerHTML = `${data.name.toUpperCase()}`
    console.log(data)
}) 
}

document.getElementsByTagName("button")[0].addEventListener("click",API);

document.getElementById("pokemon").addEventListener('keypress', 
function(event) {
    key = event.keyCode
    if (key === 13) {
       API();
    }
})


