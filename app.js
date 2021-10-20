

var url = "https://pokeapi.co/api/v2/pokemon/pikachu/"
fetch(url)
.then(response => response.json())
.then(data=>{
    document.write(data.name)
    document.write("<br>")
    document.write(data.order)
    document.write(`<img src='${data.sprites.front_default}'/>`)
    console.log(data)
})
