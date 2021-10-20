
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
    document.getElementById("img").innerHTML = `<img src='${data.sprites.front_default}'/>`;
    document.getElementById("nome").innerHTML = `${data.name}`
    console.log(data)
}) 
}

document.getElementsByTagName("button")[0].addEventListener("click",API);


